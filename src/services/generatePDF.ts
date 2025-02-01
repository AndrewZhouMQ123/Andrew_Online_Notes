import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Type definitions (unchanged)
type EntityData = { entity: string; unicode: string; htmlCode: string };
type ElementData = { element: string; attributes: string; desc: string };
type PropData = { prop: string; desc: string; val: string };
type FuncData = { func: string; desc: string; params: string };
type IdentifierData = { identifier: string; literal: string; description: string };
type InterfaceData = { interface: string; description: string; methods_properties: string };

// Type Guards (unchanged)
const isEntityData = (data: unknown[]): data is EntityData[] => 
  Array.isArray(data) && data.length > 0 && typeof (data[0] as EntityData).entity === "string";

const isElementData = (data: unknown[]): data is ElementData[] => 
  Array.isArray(data) && data.length > 0 && typeof (data[0] as ElementData).element === "string";

const isPropData = (data: unknown[]): data is PropData[] => 
  Array.isArray(data) && data.length > 0 && typeof (data[0] as PropData).prop === "string";

const isFuncData = (data: unknown[]): data is FuncData[] => 
  Array.isArray(data) && data.length > 0 && typeof (data[0] as FuncData).func === "string";

const isIdentifierData = (data: unknown[]): data is IdentifierData[] => 
  Array.isArray(data) && data.length > 0 && typeof (data[0] as IdentifierData).identifier === "string";

const isInterfaceData = (data: unknown[]): data is InterfaceData[] => 
  Array.isArray(data) && data.length > 0 && typeof (data[0] as InterfaceData).interface === "string";

// Generic PDF Generator
const generatePdf = <T>(
  data: T[],
  title: string,
  getColumnsAndRows: (data: T[]) => { columns: string[]; rows: string[][] }
) => {
  if (data.length === 0) {
    console.warn("No data to save");
    return;
  }

  const { columns, rows } = getColumnsAndRows(data);

  if (columns.length === 0 || rows.length === 0) {
    console.error("Invalid data format");
    return;
  }

  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text(title, 10, 10);
  doc.setFontSize(12);

  autoTable(doc, {
    head: [columns],
    body: rows,
    startY: 20, // Prevent title overlap
    theme: "grid", // Optional styling
    styles: { fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185], textColor: 255 }
  });

  doc.save(`${title}.pdf`);
};

// Updated handle3TSave with proper type narrowing
export const handle3TSave = (
  data: EntityData[] | ElementData[] | PropData[] | FuncData[] | IdentifierData[] | InterfaceData[],
  title: string
) => {
  type DataType = EntityData | ElementData | PropData | FuncData | IdentifierData | InterfaceData;
  
  generatePdf<DataType>(data as DataType[], title, (items) => {
    const configs = [
      {
        guard: isEntityData,
        columns: ["Entity", "Unicode", "HTML Code"],
        rowMapper: (item: EntityData) => [item.entity, item.unicode, item.htmlCode]
      },
      {
        guard: isElementData,
        columns: ["Element", "Attributes", "Description"],
        rowMapper: (item: ElementData) => [item.element, item.attributes, item.desc]
      },
      {
        guard: isPropData,
        columns: ["Property", "Description", "Value"],
        rowMapper: (item: PropData) => [item.prop, item.desc, item.val]
      },
      {
        guard: isFuncData,
        columns: ["Function", "Description", "Parameters"],
        rowMapper: (item: FuncData) => [item.func, item.desc, item.params]
      },
      {
        guard: isIdentifierData,
        columns: ["Identifier", "Literal", "Description"],
        rowMapper: (item: IdentifierData) => [item.identifier, item.literal, item.description]
      },
      {
        guard: isInterfaceData,
        columns: ["Interface", "Description", "Methods/Properties"],
        rowMapper: (item: InterfaceData) => [item.interface, item.description, item.methods_properties]
      }
    ];

    for (const config of configs) {
      if (config.guard(items)) {
        // Type-safe mapping after type narrowing
        return {
          columns: config.columns,
          rows: items.map((item): string[] => config.rowMapper(item as never))
        };
      }
    }
    return { columns: [], rows: [] };
  });
};

export const handle2TSave = (
  data: { attribute: string; desc: string }[] 
    | { method: string; desc: string }[]
    | { prop: string; desc: string }[]
    | { object: string; methodsValues: string }[]
    | { selector: string; desc: string }[]
    | { datatype: string; def: string }[]
    | { atRule: string; desc: string }[]
    | { keyword: string; desc: string }[]
    | { http: string; desc: string }[]
    | { cmd: string; desc: string }[],
  title: string
) => {
  // Define union type of all possible item types
  type ItemType = typeof data extends (infer U)[] ? U : never;
  
  generatePdf<ItemType>(data, title, (items) => {
    const configs = [
      {
        key: 'attribute',
        columns: ['Attribute', 'Description'],
        valueKey: 'desc',
        guard: (arr: ItemType[]): arr is { attribute: string; desc: string }[] => 
          arr.length > 0 && 'attribute' in arr[0]
      },
      {
        key: 'http',
        columns: ['HTTP Status', 'Description'],
        valueKey: 'desc',
        guard: (arr: ItemType[]): arr is { http: string; desc: string }[] => 
          arr.length > 0 && 'http' in arr[0]
      },
      {
        key: 'cmd',
        columns: ['Command', 'Description'],
        valueKey: 'desc',
        guard: (arr: ItemType[]): arr is { cmd: string; desc: string }[] => 
          arr.length > 0 && 'cmd' in arr[0]
      },
      {
        key: 'method',
        columns: ['Method', 'Description'],
        valueKey: 'desc',
        guard: (arr: ItemType[]): arr is { method: string; desc: string }[] => 
          arr.length > 0 && 'method' in arr[0]
      },
      // ... similar guards for other types ...
      {
        key: 'keyword',
        columns: ['Keyword', 'Description'],
        valueKey: 'desc',
        guard: (arr: ItemType[]): arr is { keyword: string; desc: string }[] => 
          arr.length > 0 && 'keyword' in arr[0]
      }
    ];

    for (const config of configs) {
      if (config.guard(items)) {
        return {
          columns: config.columns,
          rows: items.map(item => [
            item[config.key as keyof typeof item], 
            item[config.valueKey as keyof typeof item]
          ])
        };
      }
    }

    // Fallback using actual keys from data
    const columns = items[0] ? Object.keys(items[0]) : [];
    return {
      columns,
      rows: items.map(row => columns.map(col => 
        (row as Record<string, string>)[col] || ''
      ))
    };
  });
};