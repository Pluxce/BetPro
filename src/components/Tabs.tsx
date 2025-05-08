import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'line' | 'enclosed' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  variant = 'line',
  size = 'md',
  fullWidth = false,
  className = '',
  onChange
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const variantStyles = {
    line: {
      nav: 'border-b border-gray-200',
      tab: 'border-b-2 border-transparent hover:border-gray-300',
      activeTab: 'border-blue-500 text-blue-600',
      inactiveTab: 'text-gray-500 hover:text-gray-700'
    },
    enclosed: {
      nav: 'space-x-2',
      tab: 'rounded-t-lg border-t border-l border-r border-transparent',
      activeTab: 'bg-white border-gray-200 text-blue-600',
      inactiveTab: 'bg-gray-50 text-gray-500 hover:text-gray-700 hover:bg-gray-100'
    },
    pill: {
      nav: 'space-x-2',
      tab: 'rounded-full',
      activeTab: 'bg-blue-100 text-blue-700',
      inactiveTab: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
    }
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const styles = variantStyles[variant];

  return (
    <div className={className}>
      <nav
        className={`flex ${fullWidth ? 'w-full' : ''} ${styles.nav}`}
        role="tablist"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            className={`
              ${fullWidth ? 'flex-1' : ''}
              ${sizeStyles[size]}
              ${styles.tab}
              ${activeTab === tab.id ? styles.activeTab : styles.inactiveTab}
              flex items-center justify-center font-medium transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            onClick={() => !tab.disabled && handleTabClick(tab.id)}
            disabled={tab.disabled}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            className={activeTab === tab.id ? 'animate-fade-in' : ''}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;