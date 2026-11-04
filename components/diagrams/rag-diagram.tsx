import { Arrow, Box, Diagram } from "./primitives";

const ID = "rag";

export function RagDiagram() {
  return (
    <Diagram
      id={ID}
      width={360}
      height={128}
      label="RAG pipeline: engineering blog posts are chunked and embedded into a vector store in Postgres. At query time the top-k chunks are retrieved and passed to gpt-4o-mini, which returns an answer with citations."
    >
      <Arrow id={ID} d="M106,28 H130" />
      <Arrow id={ID} d="M230,28 H254" />
      <Arrow id={ID} hot d="M304,48 V80" />
      <Arrow id={ID} hot d="M254,100 H230" />
      <Arrow id={ID} hot d="M130,100 H106" />

      <Box x={6} y={8} w={100} h={40} lines={["Engineering", "blogs"]} />
      <Box x={130} y={8} w={100} h={40} lines={["Chunk +", "embed"]} />
      <Box x={254} y={8} w={100} h={40} lines={["Vector store", "(Postgres)"]} />
      <Box x={254} y={80} w={100} h={40} lines={["Retrieve", "top-k"]} />
      <Box x={130} y={80} w={100} h={40} lines={["gpt-4o-mini"]} />
      <Box x={6} y={80} w={100} h={40} lines={["Answer with", "citations"]} />
    </Diagram>
  );
}
