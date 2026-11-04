import { Arrow, Box, Diagram, Label } from "./primitives";

const ID = "wh";

export function WebhookDiagram() {
  return (
    <Diagram
      id={ID}
      width={360}
      height={232}
      label="Webhook delivery: events go onto a queue and a delivery worker sends them to the customer endpoint. On failure the delivery is retried with exponential backoff and handed back to the worker; after the maximum number of retries it moves to a dead-letter queue. A delivery log UI reads delivery attempts from Postgres."
    >
      {/* Hot path */}
      <Arrow id={ID} hot d="M68,22 H92" />
      <Arrow id={ID} hot d="M152,22 H192" />
      <Arrow id={ID} hot d="M256,36 V68" />

      {/* Failure path */}
      <Arrow id={ID} d="M256,96 V128" />
      <Label x={248} y={116} anchor="end">
        on failure
      </Label>
      <Arrow id={ID} dashed d="M320,146 H340 V22 H320" />
      <Arrow id={ID} d="M256,164 V196" />
      <Label x={248} y={184} anchor="end">
        max retries
      </Label>

      <Box x={8} y={8} w={60} lines={["Event"]} />
      <Box x={92} y={8} w={60} lines={["Queue"]} />
      <Box x={192} y={8} w={128} lines={["Delivery worker"]} />
      <Box x={192} y={68} w={128} lines={["Customer endpoint"]} />
      <Box x={192} y={128} w={128} h={36} lines={["Retry", "exp. backoff"]} />
      <Box x={192} y={196} w={128} lines={["Dead-letter queue"]} />

      <Box x={8} y={128} w={144} h={44} dashed lines={["Delivery log UI", "reads Postgres"]} />
    </Diagram>
  );
}
