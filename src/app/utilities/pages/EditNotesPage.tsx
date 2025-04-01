"use client";
import { useState } from "react";

const names = [
  { name: "generalCMD" },
  { name: "executablesCMD" },
  { name: "vimcommands" },
  { name: "gitCommands" },
  { name: "scpcommands" },
  { name: "directoryCommands" },
  { name: "Languages" },
  { name: "shortcuts" },
  { name: "vscodecmd" },
  { name: "readWriteCMD" },
  { name: "taskManageMCD" },
  { name: "networkCMD" },
  { name: "findgrepCMD" },
  { name: "fileCMD" },
  { name: "brewCMD" },
  { name: "cssSelectors" },
  { name: "cssProperties" },
  { name: "pseudoClasses" },
  { name: "pseudoElements" },
  { name: "cssDatatype" },
  { name: "cssFunctions" },
  { name: "cssAtRules" },
  { name: "cssKeywords" },
  { name: "HardwareTechnologies" },
  { name: "Certificates" },
  { name: "metadata" },
  { name: "sectionheadings" },
  { name: "inlines" },
  { name: "formElements" },
  { name: "mediaElements" },
  { name: "tableElements" },
  { name: "htmlEntities" },
  { name: "globalAttributes" },
  { name: "globalProperties" },
  { name: "primitiveDataTypes" },
  { name: "CloudTechnologies" },
  { name: "builtInFunctions" },
  { name: "builtInObjects" },
  { name: "domBomAPI" },
  { name: "npmCommands" },
  { name: "additionalAttributesData" },
  { name: "eventHandlerAttributesData" },
  { name: "httpProperties" },
  { name: "httpMethods" },
  { name: "httpHeaders" },
  { name: "httpStatusCodes" },
  { name: "SoftwareTechnologies" },
  { name: "Soft" },
  { name: "DatabaseTechnologies" },
  { name: "ProgrammingLanguages" },
  { name: "externalAPIs" },
];

const EditNotesPage = () => {
  return (
    <div>
      <NameTable />
      <UpdateDataForm />
    </div>
  );
};

export default EditNotesPage;

function NameTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/modifyData?name=${name}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrap">
      <table className="border-collapse border border-black w-full">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-black p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map(({ name }) => (
            <tr
              key={name}
              className="cursor-pointer hover:bg-gray-200"
              onClick={() => fetchData(name)}
            >
              <td className="border border-black p-2">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-4 border border-black bg-white text-black">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {data && (
          <pre className="whitespace-pre-wrap text-sm bg-gray-200 p-2 border border-black text-black">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

interface ElementItem {
  element: string;
  attributes: string;
  desc: string;
}

interface HTMLGlobalAttributeItem {
  attribute: string;
  desc: string;
}

interface HTMLEntityItem {
  entity: string;
  unicode: string;
  htmlCode: string;
}

interface CssSelectorItem {
  selector: string;
  desc: string;
}

interface CssPropertiesItem {
  prop: string;
  desc: string;
  val: string;
}

interface CssDataTypeItem {
  datatype: string;
  def: string;
}

interface CssFunctionItem {
  func: string;
  desc: string;
  params: string;
}

interface CssAtRuleItem {
  atRule: string;
  desc: string;
}

interface CssKeywordItem {
  keyword: string;
  desc: string;
}

interface Https {
  http: string;
  desc: string;
}

interface GlobalPropertyItem {
  prop: string;
  desc: string;
}

interface PrimitiveDataTypeItem {
  identifier: string;
  literal: string;
  description: string;
}

interface BuiltInFunctionItem {
  method: string;
  desc: string;
}

interface BuiltInObjectItem {
  object: string;
  methodsValues: string;
}

interface DomBomAPIItem {
  interface: string;
  description: string;
  methods_properties: string;
}

interface NpmCommand {
  command: string;
  desc: string;
}

interface Commands {
  cmd: string;
  desc: string;
}

interface Skill {
  skill: string;
  proficiency: string;
}

interface Certificate {
  certificate: string;
  date: string;
}

type DatasheetItem =
  | ElementItem
  | HTMLGlobalAttributeItem
  | HTMLEntityItem
  | CssSelectorItem
  | CssPropertiesItem
  | CssDataTypeItem
  | CssFunctionItem
  | CssAtRuleItem
  | CssKeywordItem
  | Https
  | GlobalPropertyItem
  | PrimitiveDataTypeItem
  | BuiltInFunctionItem
  | BuiltInObjectItem
  | DomBomAPIItem
  | NpmCommand
  | Commands
  | Skill
  | Certificate;

interface Data {
  name: string;
  datasheet: DatasheetItem[];
}

function UpdateDataForm() {
  const [name, setName] = useState("");
  const [datasheet, setDatasheet] = useState<string>(""); // JSON string input
  const [password, setPassword] = useState(""); // New state for password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const parsedDatasheet: DatasheetItem[] = JSON.parse(datasheet);
      const requestBody: Data = {
        name,
        datasheet: parsedDatasheet,
      };

      const response = await fetch(`/api/modifyData?name=${name}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to update data");

      setSuccess("Data updated successfully!");
      setName(""); // Reset form fields
      setDatasheet("");
      setPassword("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrap">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="datasheet" className="block text-lg font-medium">
            Datasheet (JSON format):
          </label>
          <textarea
            id="datasheet"
            value={datasheet}
            onChange={(e) => setDatasheet(e.target.value)}
            className="border p-2 w-full"
            rows={10}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Data"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
}
