# agent-benchmarking-2026-02
Agentic AI benchmarks for writing tscircuit code including all logs

To see ai-generated circuits, run `tsci dev` in this project.

Each directory contains a run of an opencode-harness in a container with the prompt below. Examine the logs and
the outcome to determine new features to create, such as additional DRC checks or syntaxes that should be supported.

## Prompt

```
create a minimal RP2040 breakout board with a usb port and LED,
disable the autorouting with routingDisabled,
do not use components from the tscircuit registry
```


[tscircuit skill](https://github.com/tscircuit/skill)
