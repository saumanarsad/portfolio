import { Arrow, Box, Diagram, Label } from "./primitives";

const ID = "wf";

export function WorkflowEngineDiagram() {
  return (
    <Diagram
      id={ID}
      width={360}
      height={336}
      label="Workflow engine architecture: a trigger (webhook or event) hits the API, which enqueues a job on a BullMQ queue backed by Redis. A worker picks up the job and hands it to the step executor, which sends messages through WhatsApp and email channels. A wait step creates a delayed job with its state stored in Postgres, which later resumes the worker. The worker streams progress over a WebSocket to a live execution UI."
    >
      {/* Hot path */}
      <Arrow id={ID} hot d="M84,44 V68" />
      <Arrow id={ID} hot d="M84,96 V120" />
      <Arrow id={ID} hot d="M84,156 V180" />
      <Arrow id={ID} hot d="M84,208 V236" />
      <Arrow id={ID} hot d="M84,264 V292" />

      {/* Live updates */}
      <Arrow id={ID} d="M152,188 H260 V152" />
      <Arrow id={ID} d="M260,124 V96" />

      {/* Durable wait / resume */}
      <Arrow id={ID} d="M152,250 H196" />
      <Arrow id={ID} d="M260,264 V292" />
      <Arrow id={ID} dashed d="M324,310 H344 V202 H152" />
      <Label x={302} y={197}>
        resume
      </Label>

      <Box x={16} y={8} w={136} h={36} lines={["Trigger", "webhook / event"]} />
      <Box x={16} y={68} w={136} lines={["API"]} />
      <Box x={16} y={120} w={136} h={36} lines={["BullMQ queue", "(Redis)"]} />
      <Box x={16} y={180} w={136} lines={["Worker"]} />
      <Box x={16} y={236} w={136} lines={["Step executor"]} />
      <Box x={16} y={292} w={136} h={36} lines={["Channels", "WhatsApp · Email"]} />

      <Box x={196} y={68} w={128} lines={["Live execution UI"]} />
      <Box x={196} y={124} w={128} lines={["WebSocket"]} />
      <Box x={196} y={236} w={128} lines={["Wait step"]} />
      <Box x={196} y={292} w={128} h={36} lines={["Delayed job +", "state in Postgres"]} />
    </Diagram>
  );
}
