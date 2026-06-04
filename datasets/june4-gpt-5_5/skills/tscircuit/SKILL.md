---
name: tscircuit
description: Build, modify, and debug tscircuit designs.
allowed-tools: Read, Write, Grep, Glob, Bash
---

## Examples

- `./examples`

## Getting started
1. Clarify requirements (if not already given)
   - Board form factor / size constraints
   - Power sources and voltage rails
   - I/O: connectors, headers, mounting holes, mechanical constraints
   - Target manufacturer constraints (trace/space, assembly, supplier)
   - `<trace/>` will produce netLabels when the traces cannot be connected.

2. Choose a starting point
   - If the repo is not a tscircuit project, recommend:
      - Install CLI, then `tsci init` to bootstrap a project.
   - If a form-factor template is appropriate (Arduino Shield, Raspberry Pi HAT, etc.), prefer `@tscircuit/common` templates.

## Standard workflow (schematic placement/debug loop)

Before writing code, inspect `./examples` and use the closest matching example as your starting point.
Use this sequence for schematic tasks that require checker-driven placement cleanup:

1. Create or update the schematic with explicit structure/grouping as requested.
2. Respect user constraints.
3. Before running placement checks:
   - remove all manual `schX` and `schY` from schematic components
   - remove all manual `schWidth` and `schHeight` overrides

4. Run
   - `tsc --noEmit`.
5. Run:
   - `tsci check schematic-placement`
6. Add only coordinates explicitly returned by the check to the circuit.
7. Fix reported issues in this order, rerunning the check after each fix:
   - `VerboseSchematicNetLabel`
   - `PinHeaderSchematicBoxTooWide`
   - `GenericSchematicBoxTooWide`
   - `SchematicBoxInnerLabelCollision`
   - `CapacitorSymbolHorizontal`
   - `SchematicPinPaddingToEdgeTooLarge`
   - `DiodeResistorNotAligned`
   - `ComponentOverlap`
   - `SchematicBoxHasALotOfSurroundingWhitespace`
   - `ComponentNetLabelCollision`
   - `ComponentBoxNetLabelCollision`
   - `NetLabelCollision`
8. Rerun `tsci check schematic-placement` after each applied fix; each run may resolve multiple violations and may also expose new ones.
9. Continue only with user-requested next steps after the loop is clean.

## Placement constraints

- Do not add `schX`, `schY`, `schWidth`, or `schHeight` manually unless directly instructed by `tsci check schematic-placement`.

## Syntax

- `./SYNTAX.md`

## Export.
   - Run `tsci build`.
   - Run `tsci snapshot`.


## Builtin Elements

- [`<analogsimulation />`](./elements/analogsimulation.md)
- [`<battery />`](./elements/battery.md)
- [`<board />`](./elements/board.md)
- [`<cadassembly />`](./elements/cadassembly.md)
- [`<cadmodel />`](./elements/cadmodel.md)
- [`<capacitor />`](./elements/capacitor.md)
- [`<chip />`](./elements/chip.md)
- [`<connector />`](./elements/connector.md)
- [`<constraint />`](./elements/constraint.md)
- [`<copperpour />`](./elements/copperpour.md)
- [`<coppertext />`](./elements/coppertext.md)
- [`<courtyardcircle />`](./elements/courtyardcircle.md)
- [`<courtyardoutline />`](./elements/courtyardoutline.md)
- [`<courtyardpill />`](./elements/courtyardpill.md)
- [`<courtyardrect />`](./elements/courtyardrect.md)
- [`<crystal />`](./elements/crystal.md)
- [`<currentsource />`](./elements/currentsource.md)
- [`<cutout />`](./elements/cutout.md)
- [`<diode />`](./elements/diode.md)
- [`<fabricationnotedimension />`](./elements/fabricationnotedimension.md)
- [`<fabricationnotepath />`](./elements/fabricationnotepath.md)
- [`<fabricationnoterect />`](./elements/fabricationnoterect.md)
- [`<fabricationnotetext />`](./elements/fabricationnotetext.md)
- [`<fiducial />`](./elements/fiducial.md)
- [`<footprint />`](./elements/footprint.md)
- [`<fuse />`](./elements/fuse.md)
- [`<group />`](./elements/group.md)
- [`<hole />`](./elements/hole.md)
- [`<inductor />`](./elements/inductor.md)
- [`<jumper />`](./elements/jumper.md)
- [`<led />`](./elements/led.md)
- [`<mosfet />`](./elements/mosfet.md)
- [`<mountedboard />`](./elements/mountedboard.md)
- [`<net />`](./elements/net.md)
- [`<netalias />`](./elements/netalias.md)
- [`<opamp />`](./elements/opamp.md)
- [`<panel />`](./elements/panel.md)
- [`<pcbkeepout />`](./elements/pcbkeepout.md)
- [`<pcbnotedimension />`](./elements/pcbnotedimension.md)
- [`<pcbnoteline />`](./elements/pcbnoteline.md)
- [`<pcbnotepath />`](./elements/pcbnotepath.md)
- [`<pcbnoterect />`](./elements/pcbnoterect.md)
- [`<pcbnotetext />`](./elements/pcbnotetext.md)
- [`<pcbtrace />`](./elements/pcbtrace.md)
- [`<pinheader />`](./elements/pinheader.md)
- [`<pinout />`](./elements/pinout.md)
- [`<platedhole />`](./elements/platedhole.md)
- [`<port />`](./elements/port.md)
- [`<potentiometer />`](./elements/potentiometer.md)
- [`<pushbutton />`](./elements/pushbutton.md)
- [`<resistor />`](./elements/resistor.md)
- [`<resonator />`](./elements/resonator.md)
- [`<schematicarc />`](./elements/schematicarc.md)
- [`<schematicbox />`](./elements/schematicbox.md)
- [`<schematiccell />`](./elements/schematiccell.md)
- [`<schematiccircle />`](./elements/schematiccircle.md)
- [`<schematicline />`](./elements/schematicline.md)
- [`<schematicpath />`](./elements/schematicpath.md)
- [`<schematicrect />`](./elements/schematicrect.md)
- [`<schematicrow />`](./elements/schematicrow.md)
- [`<schematicsection />`](./elements/schematicsection.md)
- [`<schematictable />`](./elements/schematictable.md)
- [`<schematictext />`](./elements/schematictext.md)
- [`<silkscreencircle />`](./elements/silkscreencircle.md)
- [`<silkscreenline />`](./elements/silkscreenline.md)
- [`<silkscreenpath />`](./elements/silkscreenpath.md)
- [`<silkscreenrect />`](./elements/silkscreenrect.md)
- [`<silkscreentext />`](./elements/silkscreentext.md)
- [`<smtpad />`](./elements/smtpad.md)
- [`<solderjumper />`](./elements/solderjumper.md)
- [`<subcircuit />`](./elements/subcircuit.md)
- [`<subpanel />`](./elements/subpanel.md)
- [`<switch />`](./elements/switch.md)
- [`<symbol />`](./elements/symbol.md)
- [`<testpoint />`](./elements/testpoint.md)
- [`<trace />`](./elements/trace.md)
- [`<tracehint />`](./elements/tracehint.md)
- [`<transistor />`](./elements/transistor.md)
- [`<via />`](./elements/via.md)
- [`<voltageprobe />`](./elements/voltageprobe.md)
- [`<voltagesource />`](./elements/voltagesource.md)
