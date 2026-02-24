import React from "react"

export default () => (
  <board width="60mm" height="45mm" routingDisabled>
    {/* ============================================================
        RP2040 Microcontroller – QFN-56 (7x7 mm, 0.4 mm pitch)
        Only the pins used in this minimal breakout are wired.
        ============================================================ */}
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56_w7_h7_p0.4mm"
      pinLabels={{
        pin1: "IOVDD_1",
        pin2: "GPIO0",
        pin3: "GPIO1",
        pin4: "GPIO2",
        pin5: "GPIO3",
        pin6: "GPIO4",
        pin7: "GPIO5",
        pin8: "GPIO6",
        pin9: "GPIO7",
        pin10: "IOVDD_2",
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
        pin22: "IOVDD_3",
        pin23: "DVDD",
        pin24: "SWCLK",
        pin25: "SWD",
        pin26: "RUN",
        pin27: "GPIO16",
        pin28: "GPIO17",
        pin29: "GPIO18",
        pin30: "GPIO19",
        pin31: "GPIO20",
        pin32: "GPIO21",
        pin33: "IOVDD_4",
        pin34: "GPIO22",
        pin35: "GPIO23",
        pin36: "GPIO24",
        pin37: "GPIO25",
        pin38: "GPIO26",
        pin39: "GPIO27",
        pin40: "GPIO28",
        pin41: "GPIO29",
        pin42: "IOVDD_5",
        pin43: "ADC_AVDD",
        pin44: "VREG_VIN",
        pin45: "VREG_VOUT",
        pin46: "USB_DM",
        pin47: "USB_DP",
        pin48: "USB_VDD",
        pin49: "IOVDD_6",
        pin50: "DVDD_2",
        pin51: "QSPI_SD3",
        pin52: "QSPI_SCLK",
        pin53: "QSPI_SD0",
        pin54: "QSPI_SD2",
        pin55: "QSPI_SD1",
        pin56: "QSPI_SS",
        pin57: "GND",
      }}
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
    />

    {/* ============================================================
        USB-C Connector (16-pin simplified for USB 2.0)
        Pads arranged in two rows (A-side and B-side) at 0.5mm pitch
        ============================================================ */}
    <chip
      name="J1"
      manufacturerPartNumber="USB-C-16P"
      footprint={
        <footprint>
          {/* Row A (top row): A1(GND), A4(VBUS), A5(CC1), A6(DP1), A7(DN1), A8(SBU1), A9(VBUS), A12(GND) */}
          <smtpad portHints={["pin1"]}  shape="rect" width="0.6mm" height="1.2mm" pcbX={-2.45} pcbY={-3.2} />
          <smtpad portHints={["pin2"]}  shape="rect" width="0.3mm" height="1.2mm" pcbX={-1.75} pcbY={-3.2} />
          <smtpad portHints={["pin3"]}  shape="rect" width="0.3mm" height="1.2mm" pcbX={-1.25} pcbY={-3.2} />
          <smtpad portHints={["pin4"]}  shape="rect" width="0.3mm" height="1.2mm" pcbX={-0.75} pcbY={-3.2} />
          <smtpad portHints={["pin5"]}  shape="rect" width="0.3mm" height="1.2mm" pcbX={-0.25} pcbY={-3.2} />
          <smtpad portHints={["pin6"]}  shape="rect" width="0.3mm" height="1.2mm" pcbX={0.25}  pcbY={-3.2} />
          <smtpad portHints={["pin7"]}  shape="rect" width="0.3mm" height="1.2mm" pcbX={1.75}  pcbY={-3.2} />
          <smtpad portHints={["pin8"]}  shape="rect" width="0.6mm" height="1.2mm" pcbX={2.45}  pcbY={-3.2} />
          {/* Row B (bottom row): B12(GND), B9(VBUS), B8(SBU2), B7(DN2), B6(DP2), B5(CC2), B4(VBUS), B1(GND) */}
          <smtpad portHints={["pin9"]}  shape="rect" width="0.6mm" height="1.2mm" pcbX={-2.45} pcbY={3.2} />
          <smtpad portHints={["pin10"]} shape="rect" width="0.3mm" height="1.2mm" pcbX={-1.75} pcbY={3.2} />
          <smtpad portHints={["pin11"]} shape="rect" width="0.3mm" height="1.2mm" pcbX={-1.25} pcbY={3.2} />
          <smtpad portHints={["pin12"]} shape="rect" width="0.3mm" height="1.2mm" pcbX={-0.75} pcbY={3.2} />
          <smtpad portHints={["pin13"]} shape="rect" width="0.3mm" height="1.2mm" pcbX={-0.25} pcbY={3.2} />
          <smtpad portHints={["pin14"]} shape="rect" width="0.3mm" height="1.2mm" pcbX={0.25}  pcbY={3.2} />
          <smtpad portHints={["pin15"]} shape="rect" width="0.3mm" height="1.2mm" pcbX={1.75}  pcbY={3.2} />
          <smtpad portHints={["pin16"]} shape="rect" width="0.6mm" height="1.2mm" pcbX={2.45}  pcbY={3.2} />
        </footprint>
      }
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
      schX={-18}
      schY={0}
      pcbX={-22}
      pcbY={0}
    />

    {/* ============================================================
        12 MHz Crystal – HC49 / 3215 form factor
        ============================================================ */}
    <chip
      name="Y1"
      manufacturerPartNumber="12MHz"
      footprint="0805"
      pinLabels={{
        pin1: "XIN",
        pin2: "XOUT",
      }}
      schX={4}
      schY={-8}
      pcbX={6}
      pcbY={-8}
    />

    {/* Crystal load capacitors */}
    <capacitor name="C_X1" capacitance="20pF" footprint="0402" pcbX={3} pcbY={-11} schX={2} schY={-12} />
    <capacitor name="C_X2" capacitance="20pF" footprint="0402" pcbX={9} pcbY={-11} schX={6} schY={-12} />

    {/* ============================================================
        W25Q16 Flash – SOIC-8 (QSPI)
        ============================================================ */}
    <chip
      name="U2"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint="soic8_p1.27mm"
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
      schX={14}
      schY={0}
      pcbX={14}
      pcbY={0}
    />

    {/* Flash decoupling */}
    <capacitor name="C_FL" capacitance="100nF" footprint="0402" pcbX={14} pcbY={-5} schX={18} schY={0} />

    {/* ============================================================
        LED on GPIO25 with current-limiting resistor
        ============================================================ */}
    <led
      name="LED1"
      color="green"
      footprint="0603"
      pcbX={-10}
      pcbY={10}
      schX={-8}
      schY={8}
    />
    <resistor
      name="R_LED"
      resistance="330"
      footprint="0402"
      pcbX={-5}
      pcbY={10}
      schX={-4}
      schY={8}
    />

    {/* ============================================================
        USB CC pull-down resistors (5.1 kΩ) for device mode
        ============================================================ */}
    <resistor name="R_CC1" resistance="5.1k" footprint="0402" pcbX={-18} pcbY={5} schX={-16} schY={4} />
    <resistor name="R_CC2" resistance="5.1k" footprint="0402" pcbX={-18} pcbY={8} schX={-16} schY={7} />

    {/* ============================================================
        Decoupling capacitors for RP2040 power rails
        ============================================================ */}
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={5} pcbY={5} schX={4} schY={4} />
    <capacitor name="C2" capacitance="100nF" footprint="0402" pcbX={5} pcbY={7} schX={4} schY={6} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={5} pcbY={9} schX={4} schY={8} />
    <capacitor name="C4" capacitance="1uF" footprint="0402" pcbX={5} pcbY={11} schX={4} schY={10} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={8} pcbY={5} schX={8} schY={4} />
    {/* VREG output cap */}
    <capacitor name="C6" capacitance="1uF" footprint="0402" pcbX={8} pcbY={7} schX={8} schY={6} />

    {/* ============================================================
        1 kΩ pull-up on RUN (reset) pin
        ============================================================ */}
    <resistor name="R_RUN" resistance="1k" footprint="0402" pcbX={-8} pcbY={-6} schX={-6} schY={-6} />

    {/* ============================================================
        TRACES – Power
        ============================================================ */}

    {/* USB VBUS → 3V3 rail (simplified – real design would use regulator) */}
    <trace from=".J1 > .VBUS1" to="net.VBUS" />
    <trace from=".J1 > .VBUS2" to="net.VBUS" />
    <trace from=".J1 > .VBUS3" to="net.VBUS" />
    <trace from=".J1 > .VBUS4" to="net.VBUS" />

    {/* USB GND */}
    <trace from=".J1 > .GND1" to="net.GND" />
    <trace from=".J1 > .GND2" to="net.GND" />
    <trace from=".J1 > .GND3" to="net.GND" />
    <trace from=".J1 > .GND4" to="net.GND" />

    {/* CC resistors to GND for USB device mode */}
    <trace from=".J1 > .CC1" to=".R_CC1 > .pin1" />
    <trace from=".R_CC1 > .pin2" to="net.GND" />
    <trace from=".J1 > .CC2" to=".R_CC2 > .pin1" />
    <trace from=".R_CC2 > .pin2" to="net.GND" />

    {/* RP2040 USB_VDD to VBUS */}
    <trace from=".U1 > .USB_VDD" to="net.VBUS" />

    {/* RP2040 VREG_VIN from VBUS */}
    <trace from=".U1 > .VREG_VIN" to="net.VBUS" />

    {/* RP2040 VREG_VOUT → 1.1 V core supply */}
    <trace from=".U1 > .VREG_VOUT" to="net.DVDD" />

    {/* DVDD core rails */}
    <trace from=".U1 > .DVDD" to="net.DVDD" />
    <trace from=".U1 > .DVDD_2" to="net.DVDD" />

    {/* IOVDD rails → 3V3 (using VBUS simplified) */}
    <trace from=".U1 > .IOVDD_1" to="net.VBUS" />
    <trace from=".U1 > .IOVDD_2" to="net.VBUS" />
    <trace from=".U1 > .IOVDD_3" to="net.VBUS" />
    <trace from=".U1 > .IOVDD_4" to="net.VBUS" />
    <trace from=".U1 > .IOVDD_5" to="net.VBUS" />
    <trace from=".U1 > .IOVDD_6" to="net.VBUS" />

    {/* ADC_AVDD */}
    <trace from=".U1 > .ADC_AVDD" to="net.VBUS" />

    {/* RP2040 GND (exposed pad) */}
    <trace from=".U1 > .GND" to="net.GND" />

    {/* TESTEN to GND (required by RP2040 datasheet) */}
    <trace from=".U1 > .TESTEN" to="net.GND" />

    {/* ============================================================
        TRACES – USB Data
        ============================================================ */}
    <trace from=".J1 > .DP1" to=".U1 > .USB_DP" />
    <trace from=".J1 > .DN1" to=".U1 > .USB_DM" />

    {/* ============================================================
        TRACES – Crystal
        ============================================================ */}
    <trace from=".U1 > .XIN" to=".Y1 > .XIN" />
    <trace from=".U1 > .XOUT" to=".Y1 > .XOUT" />

    {/* Crystal load caps */}
    <trace from=".Y1 > .XIN" to=".C_X1 > .pin1" />
    <trace from=".C_X1 > .pin2" to="net.GND" />
    <trace from=".Y1 > .XOUT" to=".C_X2 > .pin1" />
    <trace from=".C_X2 > .pin2" to="net.GND" />

    {/* ============================================================
        TRACES – QSPI Flash
        ============================================================ */}
    <trace from=".U1 > .QSPI_SS" to=".U2 > .CS" />
    <trace from=".U1 > .QSPI_SD0" to=".U2 > .DI" />
    <trace from=".U1 > .QSPI_SD1" to=".U2 > .DO" />
    <trace from=".U1 > .QSPI_SD2" to=".U2 > .WP" />
    <trace from=".U1 > .QSPI_SD3" to=".U2 > .HOLD" />
    <trace from=".U1 > .QSPI_SCLK" to=".U2 > .CLK" />

    {/* Flash power */}
    <trace from=".U2 > .VCC" to="net.VBUS" />
    <trace from=".U2 > .GND" to="net.GND" />

    {/* Flash decoupling cap */}
    <trace from=".C_FL > .pin1" to="net.VBUS" />
    <trace from=".C_FL > .pin2" to="net.GND" />

    {/* ============================================================
        TRACES – LED on GPIO25
        ============================================================ */}
    <trace from=".U1 > .GPIO25" to=".R_LED > .pin1" />
    <trace from=".R_LED > .pin2" to=".LED1 > .anode" />
    <trace from=".LED1 > .cathode" to="net.GND" />

    {/* ============================================================
        TRACES – RUN pull-up
        ============================================================ */}
    <trace from=".U1 > .RUN" to=".R_RUN > .pin1" />
    <trace from=".R_RUN > .pin2" to="net.VBUS" />

    {/* ============================================================
        TRACES – Decoupling caps
        ============================================================ */}
    {/* IOVDD decoupling */}
    <trace from=".C1 > .pin1" to="net.VBUS" />
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".C2 > .pin1" to="net.VBUS" />
    <trace from=".C2 > .pin2" to="net.GND" />
    <trace from=".C3 > .pin1" to="net.VBUS" />
    <trace from=".C3 > .pin2" to="net.GND" />
    <trace from=".C4 > .pin1" to="net.VBUS" />
    <trace from=".C4 > .pin2" to="net.GND" />
    <trace from=".C5 > .pin1" to="net.VBUS" />
    <trace from=".C5 > .pin2" to="net.GND" />

    {/* VREG output decoupling */}
    <trace from=".C6 > .pin1" to="net.DVDD" />
    <trace from=".C6 > .pin2" to="net.GND" />
  </board>
)