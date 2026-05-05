# Minimal RP2040 Breakout

This tscircuit project defines a compact RP2040 breakout with:

- JLCPCB-imported RP2040 (`C2040`)
- USB-C device port
- USB VBUS to 3.3 V LDO supply
- External QSPI flash
- 12 MHz crystal
- GPIO25 user LED
- BOOTSEL and RUN buttons
- Two 8-pin 2.54 mm breakout headers

The design intentionally avoids tscircuit registry component packages. The RP2040 was imported from JLCPCB with `tsci import --jlcpcb RP2040`; the other parts use tscircuit built-ins and local generic footprints.
