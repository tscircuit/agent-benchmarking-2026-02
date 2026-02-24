import React from "react"

export default () => (
  <board width="50mm" height="40mm" routingDisabled>
    {/* RP2040 Microcontroller - QFN-56 */}
    <chip
      name="U1"
      footprint="qfn56_w7_h7_p0.4mm"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GPIO2",
        pin4: "GPIO3",
        pin5: "GPIO4",
        pin6: "GPIO5",
        pin7: "GPIO6",
        pin8: "GPIO7",
        pin9: "VDDIO",
        pin10: "GPIO8",
        pin11: "GPIO9",
        pin12: "GPIO10",
        pin13: "GPIO11",
        pin14: "GPIO12",
        pin15: "GPIO13",
        pin16: "GPIO14",
        pin17: "GPIO15",
        pin18: "TESTEN",
        pin19: "XIN",
        pin20: "XOUT",
        pin21: "IOVDD1",
        pin22: "DVDD",
        pin23: "SWCLK",
        pin24: "SWD",
        pin25: "RUN",
        pin26: "GPIO16",
        pin27: "GPIO17",
        pin28: "GPIO18",
        pin29: "GPIO19",
        pin30: "GPIO20",
        pin31: "GPIO21",
        pin32: "GPIO22",
        pin33: "IOVDD2",
        pin34: "GPIO23",
        pin35: "GPIO24",
        pin36: "GPIO25",
        pin37: "GPIO26_ADC0",
        pin38: "GPIO27_ADC1",
        pin39: "GPIO28_ADC2",
        pin40: "GPIO29_ADC3",
        pin41: "IOVDD3",
        pin42: "ADC_AVDD",
        pin43: "VREG_VIN",
        pin44: "VREG_VOUT",
        pin45: "USB_DM",
        pin46: "USB_DP",
        pin47: "USB_VDD",
        pin48: "IOVDD4",
        pin49: "DVDD1",
        pin50: "QSPI_SD3",
        pin51: "QSPI_SCLK",
        pin52: "QSPI_SD0",
        pin53: "QSPI_SD2",
        pin54: "QSPI_SD1",
        pin55: "QSPI_SS",
        pin56: "IOVDD5",
        pin57: "GND",
      }}
    />

    {/* USB Type-C Connector (simplified 16-pin) */}
    <chip
      name="J1"
      footprint="pinrow16"
      pcbX={-20}
      pcbY={0}
      schX={-12}
      schY={0}
      pinLabels={{
        pin1: "GND1",
        pin2: "VBUS1",
        pin3: "CC1",
        pin4: "DP1",
        pin5: "DN1",
        pin6: "SBU1",
        pin7: "VBUS2",
        pin8: "GND2",
        pin9: "GND3",
        pin10: "VBUS3",
        pin11: "SBU2",
        pin12: "DN2",
        pin13: "DP2",
        pin14: "CC2",
        pin15: "VBUS4",
        pin16: "GND4",
      }}
    />

    {/* 3.3V LDO Voltage Regulator (SOT-23-5, e.g. AP2112K-3.3) */}
    <chip
      name="U2"
      footprint="pinrow5"
      pcbX={-12}
      pcbY={8}
      schX={-6}
      schY={6}
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
    />

    {/* W25Q16 Flash Memory - SOIC-8 */}
    <chip
      name="U3"
      footprint="soic8"
      pcbX={10}
      pcbY={-5}
      schX={8}
      schY={-5}
      pinLabels={{
        pin1: "CS",
        pin2: "DO",
        pin3: "WP",
        pin4: "GND",
        pin5: "DI",
        pin6: "CLK",
        pin7: "HOLD",
        pin8: "VCC",
      }}
    />

    {/* 12MHz Crystal Oscillator */}
    <chip
      name="Y1"
      footprint="pinrow4"
      pcbX={5}
      pcbY={8}
      schX={4}
      schY={6}
      pinLabels={{
        pin1: "IN",
        pin2: "GND1",
        pin3: "OUT",
        pin4: "GND2",
      }}
    />

    {/* LED (0805 package) on GPIO25 */}
    <led
      name="LED1"
      color="green"
      footprint="0805"
      pcbX={15}
      pcbY={10}
      schX={12}
      schY={4}
    />

    {/* LED current limiting resistor - 330 ohm */}
    <resistor
      name="R1"
      resistance="330"
      footprint="0402"
      pcbX={12}
      pcbY={10}
      schX={10}
      schY={4}
    />

    {/* CC1 pull-down resistor (5.1k for USB-C) */}
    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0402"
      pcbX={-18}
      pcbY={-6}
      schX={-12}
      schY={-4}
    />

    {/* CC2 pull-down resistor (5.1k for USB-C) */}
    <resistor
      name="R4"
      resistance="5.1k"
      footprint="0402"
      pcbX={-18}
      pcbY={-9}
      schX={-12}
      schY={-6}
    />

    {/* Crystal load capacitor 1 (20pF) */}
    <capacitor
      name="C1"
      capacitance="20pF"
      footprint="0402"
      pcbX={3}
      pcbY={11}
      schX={2}
      schY={8}
    />

    {/* Crystal load capacitor 2 (20pF) */}
    <capacitor
      name="C2"
      capacitance="20pF"
      footprint="0402"
      pcbX={7}
      pcbY={11}
      schX={6}
      schY={8}
    />

    {/* VDDIO decoupling capacitor */}
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3}
      pcbY={-6}
      schX={-2}
      schY={-4}
    />

    {/* DVDD decoupling capacitor */}
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      pcbX={0}
      pcbY={-8}
      schX={0}
      schY={-6}
    />

    {/* USB VDD decoupling capacitor */}
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      pcbX={-8}
      pcbY={-5}
      schX={-6}
      schY={-4}
    />

    {/* LDO input capacitor */}
    <capacitor
      name="C6"
      capacitance="10uF"
      footprint="0805"
      pcbX={-14}
      pcbY={11}
      schX={-8}
      schY={8}
    />

    {/* LDO output capacitor */}
    <capacitor
      name="C7"
      capacitance="10uF"
      footprint="0805"
      pcbX={-10}
      pcbY={11}
      schX={-4}
      schY={8}
    />

    {/* VREG_VOUT decoupling capacitor (1uF) */}
    <capacitor
      name="C8"
      capacitance="1uF"
      footprint="0402"
      pcbX={3}
      pcbY={-8}
      schX={2}
      schY={-6}
    />

    {/* Flash VCC decoupling capacitor */}
    <capacitor
      name="C9"
      capacitance="100nF"
      footprint="0402"
      pcbX={13}
      pcbY={-8}
      schX={10}
      schY={-7}
    />

    {/* ADC_AVDD decoupling capacitor */}
    <capacitor
      name="C10"
      capacitance="100nF"
      footprint="0402"
      pcbX={6}
      pcbY={-6}
      schX={4}
      schY={-4}
    />

    {/* ===== POWER TRACES ===== */}

    {/* USB VBUS to LDO input */}
    <trace from=".J1 > .VBUS1" to="net.VBUS" />
    <trace from=".J1 > .VBUS2" to="net.VBUS" />
    <trace from=".J1 > .VBUS3" to="net.VBUS" />
    <trace from=".J1 > .VBUS4" to="net.VBUS" />
    <trace from=".U2 > .VIN" to="net.VBUS" />
    <trace from=".U2 > .EN" to="net.VBUS" />
    <trace from=".C6 > .pin1" to="net.VBUS" />
    <trace from=".C6 > .pin2" to="net.GND" />

    {/* LDO output 3.3V rail */}
    <trace from=".U2 > .VOUT" to="net.VCC3V3" />
    <trace from=".C7 > .pin1" to="net.VCC3V3" />
    <trace from=".C7 > .pin2" to="net.GND" />

    {/* RP2040 power pins to 3.3V */}
    <trace from=".U1 > .IOVDD1" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD2" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD3" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD4" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD5" to="net.VCC3V3" />
    <trace from=".U1 > .VDDIO" to="net.VCC3V3" />
    <trace from=".U1 > .USB_VDD" to="net.VCC3V3" />
    <trace from=".U1 > .VREG_VIN" to="net.VCC3V3" />

    {/* RP2040 DVDD (1.1V from internal regulator) */}
    <trace from=".U1 > .DVDD" to="net.DVDD" />
    <trace from=".U1 > .DVDD1" to="net.DVDD" />
    <trace from=".U1 > .VREG_VOUT" to="net.DVDD" />
    <trace from=".C8 > .pin1" to="net.DVDD" />
    <trace from=".C8 > .pin2" to="net.GND" />

    {/* ADC_AVDD */}
    <trace from=".U1 > .ADC_AVDD" to="net.VCC3V3" />

    {/* Decoupling caps to 3.3V and GND */}
    <trace from=".C3 > .pin1" to="net.VCC3V3" />
    <trace from=".C3 > .pin2" to="net.GND" />
    <trace from=".C4 > .pin1" to="net.DVDD" />
    <trace from=".C4 > .pin2" to="net.GND" />
    <trace from=".C5 > .pin1" to="net.VCC3V3" />
    <trace from=".C5 > .pin2" to="net.GND" />
    <trace from=".C10 > .pin1" to="net.VCC3V3" />
    <trace from=".C10 > .pin2" to="net.GND" />

    {/* RP2040 GND */}
    <trace from=".U1 > .GND" to="net.GND" />

    {/* LDO GND */}
    <trace from=".U2 > .GND" to="net.GND" />

    {/* USB connector GND */}
    <trace from=".J1 > .GND1" to="net.GND" />
    <trace from=".J1 > .GND2" to="net.GND" />
    <trace from=".J1 > .GND3" to="net.GND" />
    <trace from=".J1 > .GND4" to="net.GND" />

    {/* ===== USB DATA ===== */}
    <trace from=".J1 > .DP1" to=".U1 > .USB_DP" />
    <trace from=".J1 > .DN1" to=".U1 > .USB_DM" />

    {/* USB CC pull-down resistors for USB-C device mode */}
    <trace from=".J1 > .CC1" to=".R3 > .pin1" />
    <trace from=".R3 > .pin2" to="net.GND" />
    <trace from=".J1 > .CC2" to=".R4 > .pin1" />
    <trace from=".R4 > .pin2" to="net.GND" />

    {/* ===== CRYSTAL ===== */}
    <trace from=".U1 > .XIN" to=".Y1 > .IN" />
    <trace from=".U1 > .XOUT" to=".Y1 > .OUT" />
    <trace from=".Y1 > .GND1" to="net.GND" />
    <trace from=".Y1 > .GND2" to="net.GND" />

    {/* Crystal load capacitors */}
    <trace from=".C1 > .pin1" to=".U1 > .XIN" />
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".C2 > .pin1" to=".U1 > .XOUT" />
    <trace from=".C2 > .pin2" to="net.GND" />

    {/* ===== QSPI FLASH ===== */}
    <trace from=".U1 > .QSPI_SS" to=".U3 > .CS" />
    <trace from=".U1 > .QSPI_SD0" to=".U3 > .DI" />
    <trace from=".U1 > .QSPI_SD1" to=".U3 > .DO" />
    <trace from=".U1 > .QSPI_SD2" to=".U3 > .WP" />
    <trace from=".U1 > .QSPI_SD3" to=".U3 > .HOLD" />
    <trace from=".U1 > .QSPI_SCLK" to=".U3 > .CLK" />
    <trace from=".U3 > .VCC" to="net.VCC3V3" />
    <trace from=".U3 > .GND" to="net.GND" />
    <trace from=".C9 > .pin1" to="net.VCC3V3" />
    <trace from=".C9 > .pin2" to="net.GND" />

    {/* ===== LED on GPIO25 ===== */}
    <trace from=".U1 > .GPIO25" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".LED1 > .anode" />
    <trace from=".LED1 > .cathode" to="net.GND" />

    {/* ===== MISC ===== */}
    {/* TESTEN pin should be tied to GND */}
    <trace from=".U1 > .TESTEN" to="net.GND" />

    {/* RUN pin pull-up (use 10k) - we'll reuse a resistor */}
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      pcbX={-5}
      pcbY={5}
      schX={-4}
      schY={3}
    />
    <trace from=".U1 > .RUN" to=".R5 > .pin1" />
    <trace from=".R5 > .pin2" to="net.VCC3V3" />
  </board>
)