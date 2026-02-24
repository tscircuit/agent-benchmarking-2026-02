import React from "react"

export default () => (
  <board width="50mm" height="35mm" routingDisabled>
    {/* ── RP2040 Microcontroller (QFN-56) ── */}
    <chip
      name="U1"
      footprint="qfn56_p0.4mm_7x7mm"
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
        pin9: "DVDD_1",
        pin10: "IOVDD_1",
        pin11: "GPIO8",
        pin12: "GPIO9",
        pin13: "GPIO10",
        pin14: "GPIO11",
        pin15: "GPIO12",
        pin16: "GPIO13",
        pin17: "GPIO14",
        pin18: "GPIO15",
        pin19: "TESTEN",
        pin20: "XIN",
        pin21: "XOUT",
        pin22: "IOVDD_2",
        pin23: "DVDD_2",
        pin24: "SWCLK",
        pin25: "SWDIO",
        pin26: "RUN",
        pin27: "GPIO16",
        pin28: "GPIO17",
        pin29: "GPIO18",
        pin30: "GPIO19",
        pin31: "GPIO20",
        pin32: "GPIO21",
        pin33: "IOVDD_3",
        pin34: "GPIO22",
        pin35: "GPIO23",
        pin36: "GPIO24",
        pin37: "GPIO25",
        pin38: "GPIO26_ADC0",
        pin39: "GPIO27_ADC1",
        pin40: "GPIO28_ADC2",
        pin41: "GPIO29_ADC3",
        pin42: "IOVDD_4",
        pin43: "ADC_AVDD",
        pin44: "VREG_VIN",
        pin45: "VREG_VOUT",
        pin46: "USB_DM",
        pin47: "USB_DP",
        pin48: "IOVDD_5",
        pin49: "DVDD_3",
        pin50: "QSPI_SD3",
        pin51: "QSPI_SCLK",
        pin52: "QSPI_SD0",
        pin53: "QSPI_SD2",
        pin54: "QSPI_SD1",
        pin55: "QSPI_SS_N",
        pin56: "IOVDD_6",
        pin57: "GND",
      }}
    />

    {/* ── USB Type-C Connector (16-pin) ── */}
    <chip
      name="J1"
      footprint="pinrow16"
      pcbX={-18}
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
        pin7: "SHIELD1",
        pin8: "SHIELD2",
        pin9: "GND2",
        pin10: "VBUS2",
        pin11: "CC2",
        pin12: "DP2",
        pin13: "DN2",
        pin14: "SBU2",
        pin15: "SHIELD3",
        pin16: "SHIELD4",
      }}
    />

    {/* ── Flash Memory (W25Q128 in SOIC-8) ── */}
    <chip
      name="U2"
      footprint="soic8_p1.27mm"
      pcbX={10}
      pcbY={-8}
      schX={10}
      schY={-6}
      pinLabels={{
        pin1: "CS_N",
        pin2: "DO",
        pin3: "WP_N",
        pin4: "GND",
        pin5: "DI",
        pin6: "CLK",
        pin7: "HOLD_N",
        pin8: "VCC",
      }}
    />

    {/* ── 12 MHz Crystal ── */}
    <chip
      name="Y1"
      footprint="0805"
      pcbX={5}
      pcbY={8}
      schX={5}
      schY={8}
      pinLabels={{
        pin1: "XIN",
        pin2: "XOUT",
      }}
    />

    {/* ── LED on GPIO25 ── */}
    <led
      name="LED1"
      footprint="0603"
      color="green"
      pcbX={15}
      pcbY={5}
      schX={14}
      schY={4}
    />

    {/* Current-limiting resistor for LED (330 ohm) */}
    <resistor
      name="R1"
      resistance="330"
      footprint="0402"
      pcbX={13}
      pcbY={5}
      schX={12}
      schY={4}
    />

    {/* ── USB Resistors (27 ohm) for DP/DN ── */}
    <resistor
      name="R2"
      resistance="27"
      footprint="0402"
      pcbX={-12}
      pcbY={2}
      schX={-8}
      schY={2}
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0402"
      pcbX={-12}
      pcbY={-2}
      schX={-8}
      schY={-2}
    />

    {/* ── Decoupling Capacitors ── */}
    {/* DVDD decoupling */}
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={-3} pcbY={-6} schX={-4} schY={-6} />
    <capacitor name="C2" capacitance="100nF" footprint="0402" pcbX={-1} pcbY={-6} schX={-2} schY={-6} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={1} pcbY={-6} schX={0} schY={-6} />

    {/* IOVDD decoupling */}
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={3} pcbY={-6} schX={2} schY={-6} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={5} pcbY={-6} schX={4} schY={-6} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={7} pcbY={-6} schX={6} schY={-6} />

    {/* ADC_AVDD decoupling */}
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={-3} pcbY={6} schX={-4} schY={6} />

    {/* VREG input cap */}
    <capacitor name="C8" capacitance="1uF" footprint="0402" pcbX={-1} pcbY={6} schX={-2} schY={6} />

    {/* VREG output cap */}
    <capacitor name="C9" capacitance="1uF" footprint="0402" pcbX={1} pcbY={6} schX={0} schY={6} />

    {/* Crystal load capacitors */}
    <capacitor name="C10" capacitance="20pF" footprint="0402" pcbX={3} pcbY={8} schX={3} schY={8} />
    <capacitor name="C11" capacitance="20pF" footprint="0402" pcbX={7} pcbY={8} schX={7} schY={8} />

    {/* USB VBUS decoupling */}
    <capacitor name="C12" capacitance="100nF" footprint="0402" pcbX={-15} pcbY={-5} schX={-12} schY={-5} />

    {/* Flash decoupling */}
    <capacitor name="C13" capacitance="100nF" footprint="0402" pcbX={14} pcbY={-8} schX={14} schY={-6} />

    {/* ── 3.3V LDO Regulator (SOT-23 type) ── */}
    <chip
      name="U3"
      footprint="sot23"
      pcbX={-10}
      pcbY={-8}
      schX={-8}
      schY={-8}
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "VOUT",
      }}
    />

    {/* ── Breakout Header (2x20 pin) ── */}
    <chip
      name="J2"
      footprint="pinrow20"
      pcbX={0}
      pcbY={14}
      schX={0}
      schY={14}
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GPIO2",
        pin4: "GPIO3",
        pin5: "GPIO4",
        pin6: "GPIO5",
        pin7: "GPIO6",
        pin8: "GPIO7",
        pin9: "GPIO8",
        pin10: "GPIO9",
        pin11: "GND_HDR",
        pin12: "3V3_HDR",
        pin13: "GPIO16",
        pin14: "GPIO17",
        pin15: "GPIO18",
        pin16: "GPIO19",
        pin17: "GPIO20",
        pin18: "GPIO21",
        pin19: "GPIO26_A0",
        pin20: "GPIO27_A1",
      }}
    />

    {/* ═══════════ Power Nets ═══════════ */}

    {/* USB VBUS → LDO VIN */}
    <trace from=".J1 > .pin2" to="net.VBUS" />
    <trace from=".J1 > .pin10" to="net.VBUS" />
    <trace from=".U3 > .pin1" to="net.VBUS" />
    <trace from=".C12 > .pin1" to="net.VBUS" />

    {/* LDO output → 3V3 rail */}
    <trace from=".U3 > .pin3" to="net.VCC3V3" />

    {/* 3V3 to RP2040 power pins */}
    <trace from=".U1 > .pin10" to="net.VCC3V3" />
    <trace from=".U1 > .pin22" to="net.VCC3V3" />
    <trace from=".U1 > .pin33" to="net.VCC3V3" />
    <trace from=".U1 > .pin42" to="net.VCC3V3" />
    <trace from=".U1 > .pin48" to="net.VCC3V3" />
    <trace from=".U1 > .pin56" to="net.VCC3V3" />

    {/* VREG_VIN from 3V3 */}
    <trace from=".U1 > .pin44" to="net.VCC3V3" />
    <trace from=".C8 > .pin1" to="net.VCC3V3" />

    {/* DVDD from VREG_VOUT (1.1V internal) */}
    <trace from=".U1 > .pin45" to="net.DVDD" />
    <trace from=".U1 > .pin9" to="net.DVDD" />
    <trace from=".U1 > .pin23" to="net.DVDD" />
    <trace from=".U1 > .pin49" to="net.DVDD" />
    <trace from=".C9 > .pin1" to="net.DVDD" />
    <trace from=".C1 > .pin1" to="net.DVDD" />
    <trace from=".C2 > .pin1" to="net.DVDD" />
    <trace from=".C3 > .pin1" to="net.DVDD" />

    {/* ADC_AVDD from 3V3 */}
    <trace from=".U1 > .pin43" to="net.VCC3V3" />
    <trace from=".C7 > .pin1" to="net.VCC3V3" />

    {/* Flash VCC from 3V3 */}
    <trace from=".U2 > .pin8" to="net.VCC3V3" />
    <trace from=".C13 > .pin1" to="net.VCC3V3" />

    {/* 3V3 to breakout header */}
    <trace from=".J2 > .pin12" to="net.VCC3V3" />

    {/* IOVDD decoupling to 3V3 */}
    <trace from=".C4 > .pin1" to="net.VCC3V3" />
    <trace from=".C5 > .pin1" to="net.VCC3V3" />
    <trace from=".C6 > .pin1" to="net.VCC3V3" />

    {/* ═══════════ Ground Nets ═══════════ */}
    <trace from=".J1 > .pin1" to="net.GND" />
    <trace from=".J1 > .pin9" to="net.GND" />
    <trace from=".J1 > .pin7" to="net.GND" />
    <trace from=".J1 > .pin8" to="net.GND" />
    <trace from=".J1 > .pin15" to="net.GND" />
    <trace from=".J1 > .pin16" to="net.GND" />
    <trace from=".U1 > .pin57" to="net.GND" />
    <trace from=".U2 > .pin4" to="net.GND" />
    <trace from=".U3 > .pin2" to="net.GND" />
    <trace from=".J2 > .pin11" to="net.GND" />

    {/* Decoupling cap grounds */}
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".C2 > .pin2" to="net.GND" />
    <trace from=".C3 > .pin2" to="net.GND" />
    <trace from=".C4 > .pin2" to="net.GND" />
    <trace from=".C5 > .pin2" to="net.GND" />
    <trace from=".C6 > .pin2" to="net.GND" />
    <trace from=".C7 > .pin2" to="net.GND" />
    <trace from=".C8 > .pin2" to="net.GND" />
    <trace from=".C9 > .pin2" to="net.GND" />
    <trace from=".C10 > .pin2" to="net.GND" />
    <trace from=".C11 > .pin2" to="net.GND" />
    <trace from=".C12 > .pin2" to="net.GND" />
    <trace from=".C13 > .pin2" to="net.GND" />

    {/* ═══════════ USB Data ═══════════ */}
    <trace from=".J1 > .pin5" to=".R3 > .pin1" />
    <trace from=".R3 > .pin2" to=".U1 > .pin46" />
    <trace from=".J1 > .pin4" to=".R2 > .pin1" />
    <trace from=".R2 > .pin2" to=".U1 > .pin47" />

    {/* ═══════════ Crystal ═══════════ */}
    <trace from=".U1 > .pin20" to=".Y1 > .pin1" />
    <trace from=".U1 > .pin21" to=".Y1 > .pin2" />
    <trace from=".Y1 > .pin1" to=".C10 > .pin1" />
    <trace from=".Y1 > .pin2" to=".C11 > .pin1" />

    {/* ═══════════ QSPI Flash ═══════════ */}
    <trace from=".U1 > .pin55" to=".U2 > .pin1" />
    <trace from=".U1 > .pin51" to=".U2 > .pin6" />
    <trace from=".U1 > .pin52" to=".U2 > .pin5" />
    <trace from=".U1 > .pin54" to=".U2 > .pin2" />
    <trace from=".U1 > .pin53" to=".U2 > .pin3" />
    <trace from=".U1 > .pin50" to=".U2 > .pin7" />

    {/* ═══════════ LED on GPIO25 ═══════════ */}
    <trace from=".U1 > .pin37" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".LED1 > .anode" />
    <trace from=".LED1 > .cathode" to="net.GND" />

    {/* ═══════════ GPIO Breakout ═══════════ */}
    <trace from=".U1 > .pin1" to=".J2 > .pin1" />
    <trace from=".U1 > .pin2" to=".J2 > .pin2" />
    <trace from=".U1 > .pin3" to=".J2 > .pin3" />
    <trace from=".U1 > .pin4" to=".J2 > .pin4" />
    <trace from=".U1 > .pin5" to=".J2 > .pin5" />
    <trace from=".U1 > .pin6" to=".J2 > .pin6" />
    <trace from=".U1 > .pin7" to=".J2 > .pin7" />
    <trace from=".U1 > .pin8" to=".J2 > .pin8" />
    <trace from=".U1 > .pin11" to=".J2 > .pin9" />
    <trace from=".U1 > .pin12" to=".J2 > .pin10" />
    <trace from=".U1 > .pin27" to=".J2 > .pin13" />
    <trace from=".U1 > .pin28" to=".J2 > .pin14" />
    <trace from=".U1 > .pin29" to=".J2 > .pin15" />
    <trace from=".U1 > .pin30" to=".J2 > .pin16" />
    <trace from=".U1 > .pin31" to=".J2 > .pin17" />
    <trace from=".U1 > .pin32" to=".J2 > .pin18" />
    <trace from=".U1 > .pin38" to=".J2 > .pin19" />
    <trace from=".U1 > .pin39" to=".J2 > .pin20" />

    {/* TESTEN to GND (required by RP2040 datasheet) */}
    <trace from=".U1 > .pin19" to="net.GND" />

    {/* RUN pin pull-up (use 10k to 3V3 for reset) */}
    <resistor name="R4" resistance="10k" footprint="0402" pcbX={-6} pcbY={3} schX={-6} schY={3} />
    <trace from=".U1 > .pin26" to=".R4 > .pin1" />
    <trace from=".R4 > .pin2" to="net.VCC3V3" />
  </board>
)