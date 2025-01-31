import React from 'react';
import { additionalAttributesData } from '../data/extras';
import { eventHandlerAttributesData } from '../data/extras';
import styles from "@/app/ui/accessories.module.css";

interface AttributeGroupProps {
  title: string;
  items: { code: string; description?: string }[];
}

export const AttributeGroup = ({ title, items }: AttributeGroupProps) => (
  <div className={styles.attributeGroup}>
    <div className={styles.attributeGroupTitle}>{title}</div>
    <div>
      {items.map((item, index) => (
        <React.Fragment key={item.code}>
          <code className={styles.element}>{item.code}</code>
          {item.description && (
            <span className={styles.elementDescription}> ({item.description})</span>
          )}
          {index < items.length - 1 && ', '}
        </React.Fragment>
      ))}
    </div>
  </div>
);

interface EventHandlerGroupProps {
  title: string;
  items: { code: string }[];
}

export const EventHandlerGroup = ({ title, items }: EventHandlerGroupProps) => (
  <div className={styles.attributeGroup}>
    <div className={styles.attributeGroupTitle}>{title}</div>
    <div>
      {items.map((item, index) => (
        <React.Fragment key={item.code}>
          <code className={styles.element}>{item.code}</code>
          {index < items.length - 1 && ', '}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const AdditionalAttributesSection = () => (
  <div className={styles.section}>
    <div className={styles.sectionTitle}>Additional Attributes</div>
    <div>
      {additionalAttributesData.map((group, index) => (
        <AttributeGroup key={index} title={group.title} items={group.items} />
      ))}
    </div>
  </div>
);

export const EventHandlerAttributesSection = () => (
  <div className={styles.section}>
    <div className={styles.sectionTitle}>Event Handler Attributes</div>
    <div>
      {eventHandlerAttributesData.map((group, index) => (
        <EventHandlerGroup key={index} title={group.title} items={group.items} />
      ))}
    </div>
  </div>
);