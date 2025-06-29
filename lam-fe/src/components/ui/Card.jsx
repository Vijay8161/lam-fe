// src/components/ui/Card.jsx
import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('rounded-lg border bg-card text-card-foreground shadow-sm p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;