import { Arrow, Box, Diagram, Label } from "./primitives";

const ID = "mcp";

const TOOLS: [string, number, number][] = [
  ["search_nodes", 28, 190],
  ["get_node_schema", 186, 190],
  ["get_external_data", 28, 222],
  ["create_workflow", 186, 222],
  ["save_workflow_graph", 107, 254],
];

export function McpLoopDiagram() {
  return (
    <Diagram
      id={ID}
      width={360}
      height={358}
      label="MCP agentic loop: a plain-English user prompt goes to an LLM (Claude, Gemini, Ollama or Grok). The LLM calls tools from an MCP tool registry (search_nodes, get_node_schema, get_external_data, create_workflow and save_workflow_graph) and reads the results, looping for at most 20 iterations. The result is a workflow graph saved to Postgres."
    >
      <Box x={90} y={8} w={180} h={36} lines={["User prompt", "(plain English)"]} />
      <Arrow id={ID} d="M180,44 V68" />
      <Box x={60} y={68} w={240} h={44} lines={["LLM", "Claude / Gemini / Ollama / Grok"]} />

      {/* Agent loop: tool call down, result back up */}
      <Arrow id={ID} hot d="M120,112 V160" />
      <Arrow id={ID} hot d="M240,160 V112" />
      <Label x={112} y={140} anchor="end">
        tool call
      </Label>
      <Label x={248} y={140} anchor="start">
        result
      </Label>
      <Label x={180} y={140} hot>
        ↻ ≤ 20 iterations
      </Label>

      <rect
        x={16}
        y={160}
        width={328}
        height={130}
        rx={8}
        strokeWidth={1}
        className="fill-neutral-900/40 stroke-neutral-700"
      />
      <text x={28} y={178} fontSize={11} className="fill-neutral-200">
        MCP tool registry
      </text>
      {TOOLS.map(([name, x, y]) => (
        <Box key={name} x={x} y={y} w={146} h={24} lines={[name]} small />
      ))}

      <Arrow id={ID} hot d="M180,278 V314" />
      <Box x={90} y={314} w={180} h={36} lines={["Saved workflow graph", "(Postgres)"]} />
    </Diagram>
  );
}
