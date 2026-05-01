import React, { Suspense } from 'react';
import { COMPONENT_REGISTRY } from '../registry/component-registry';
import pageConfig from '../config/page-config.json';

const DynamicRenderer: React.FC = () => {
  return (
    <main>
      {pageConfig.layout.map((section) => {
        const Component = COMPONENT_REGISTRY[section.component];
        
        if (!Component) {
          console.warn(`Component "${section.component}" not found in registry.`);
          return null;
        }

        return (
          <Suspense key={section.id} fallback={<div className="loading-shimmer" />}>
            <Component {...section.props} />
          </Suspense>
        );
      })}
    </main>
  );
};

export default DynamicRenderer;
