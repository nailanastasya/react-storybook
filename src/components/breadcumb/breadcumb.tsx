import React from 'react';
import './breadcumb.css';

type BreadcrumbProps = {
  variant: 'small' | 'medium' | 'large';
  datas: Array<{ label: string; url?: string }>;
};

const Breadcumb: React.FC<BreadcrumbProps> = ({ variant, datas }) => {
  return (
    <div className={`breadcumb breadcumb-${variant}`}>
      {datas.map((item, index) => (
        <span key={index} className="breadcumb-item">
          {item.url ? (
            <a href={item.url} className="breadcumb-link">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < datas.length - 1 && <span className="breadcumb-separator"> &gt; </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcumb;
