import React, { useEffect, useState } from "react";
import supabase from "@/lib/db";
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
            <span className={styles.elementDescription}>
              {" "}
              ({item.description})
            </span>
          )}
          {index < items.length - 1 && ", "}
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
          {index < items.length - 1 && ", "}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const AdditionalAttributesSection = () => {
  const [additionalAttributesData, setAdditionalAttributesData] = useState<
    AttributeGroupProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdditionalAttributesData = async () => {
      try {
        const { data, error } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "additionalAttributesData")
          .single();

        if (error) {
          console.error("Error fetching Additional Attributes data:", error);
          setAdditionalAttributesData([]);
        } else {
          setAdditionalAttributesData(data?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setAdditionalAttributesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAdditionalAttributesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>Additional Attributes</div>
      <div>
        {additionalAttributesData.map((group, index) => (
          <AttributeGroup key={index} title={group.title} items={group.items} />
        ))}
      </div>
    </div>
  );
};

export const EventHandlerAttributesSection = () => {
  const [eventHandlerAttributesData, setEventHandlerAttributesData] = useState<
    EventHandlerGroupProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventHandlerAttributesData = async () => {
      try {
        const { data, error } = await supabase
          .from("devnotes")
          .select("datasheet")
          .eq("name", "eventHandlerAttributesData")
          .single();

        if (error) {
          console.error("Error fetching Event Handler Attributes data:", error);
          setEventHandlerAttributesData([]);
        } else {
          setEventHandlerAttributesData(data?.datasheet || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setEventHandlerAttributesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEventHandlerAttributesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>Event Handler Attributes</div>
      <div>
        {eventHandlerAttributesData.map((group, index) => (
          <EventHandlerGroup
            key={index}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </div>
  );
};
