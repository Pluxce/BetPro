import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultExpanded?: string[];
  allowMultiple?: boolean;
  variant?: 'default' | 'separated' | 'bordered';
  className?: string;
  onChange?: (expandedItems: string[]) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultExpanded = [],
  allowMultiple = false,
  variant = 'default',
  className = '',
  onChange
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

  const toggleItem = (itemId: string) => {
    let newExpandedItems: string[];

    if (allowMultiple) {
      newExpandedItems = expandedItems.includes(itemId)
        ? expandedItems.filter(id => id !== itemId)
        : [...expandedItems, itemId];
    } else {
      newExpandedItems = expandedItems.includes(itemId) ? [] : [itemId];
    }

    setExpandedItems(newExpandedItems);
    onChange?.(newExpandedItems);
  };

  const variantStyles = {
    default: {
      wrapper: 'divide-y divide-gray-200',
      item: 'py-4',
      button: 'hover:bg-gray-50',
    },
    separated: {
      wrapper: 'space-y-2',
      item: 'bg-white rounded-lg shadow-sm',
      button: 'hover:bg-gray-50 rounded-lg',
    },
    bordered: {
      wrapper: 'border border-gray-200 rounded-lg divide-y divide-gray-200',
      item: '',
      button: 'hover:bg-gray-50',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);

        return (
          <div key={item.id} className={styles.item}>
            <button
              className={`
                w-full px-4 py-3 flex items-center justify-between text-left
                ${styles.button}
                ${item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              `}
              onClick={() => !item.disabled && toggleItem(item.id)}
              aria-expanded={isExpanded}
              aria-disabled={item.disabled}
              disabled={item.disabled}
            >
              <div className="flex items-center">
                {item.icon && (
                  <span className="mr-3 flex-shrink-0 text-gray-400">
                    {item.icon}
                  </span>
                )}
                <span className="text-sm font-medium text-gray-900">
                  {item.title}
                </span>
              </div>
              <svg
                className={`
                  ml-4 h-5 w-5 flex-shrink-0 text-gray-400
                  transition-transform duration-200
                  ${isExpanded ? 'transform rotate-180' : ''}
                `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isExpanded && (
              <div
                className="px-4 pb-4 pt-2 animate-accordion-down"
                role="region"
                aria-labelledby={`accordion-header-${item.id}`}
              >
                <div className="text-sm text-gray-500">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;