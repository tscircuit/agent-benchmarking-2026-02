import React from "react"

export default () => (
  <board
    width="50mm"
    height="35mm"
    routingDisabled
  >
    {/* ============ RP2040 Microcontroller ============ */}
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56_w7_h7_p04"
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
        pin11: "GPIO10",
        pin12: "GPIO11",
        pin13: "GPIO12",
        pin14: "GPIO13",
        pin15: "GPIO14",
        pin16: "GPIO15",
        pin17: "TESTEN",
        pin18: "XIN",
        pin19: "XOUT",
        pin20: "IOVDD1",
        pin21: "DVDD1",
        pin22: "SWCLK",
        pin23: "SWD",
        pin24: "RUN",
        pin25: "GPIO16",
        pin26: "GPIO17",
        pin27: "GPIO18",
        pin28: "GPIO19",
        pin29: "GPIO20",
        pin30: "GPIO21",
        pin31: "GPIO22",
        pin32: "GPIO23",
        pin33: "IOVDD2",
        pin34: "DVDD2",
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
        pin49: "DVDD3",
        pin50: "QSPI_SD3",
        pin51: "QSPI_SCLK",
        pin52: "QSPI_SD0",
        pin53: "QSPI_SD2",
        pin54: "QSPI_SD1",
        pin55: "QSPI_SS",
        pin56: "IOVDD5",
        pin57: "GND",
      }}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
    />

    {/* ============ USB Type-C Connector ============ */}
    <chip
      name="J1"
      footprint="pinrow16"
      pinLabels={{
        pin1: "GND1",
        pin2: "TX1P",
        pin3: "TX1N",
        pin4: "VBUS1",
        pin5: "CC1",
        pin6: "DP1",
        pin7: "DN1",
        pin8: "SBU1",
        pin9: "VBUS2",
        pin10: "SBU2",
        pin11: "DN2",
        pin12: "DP2",
        pin13: "CC2",
        pin14: "VBUS3",
        pin15: "TX2N",
        pin16: "TX2P",
      }}
      pcbX={-18}
      pcbY={0}
      schX={-15}
      schY={0}
    />

    {/* ============ 3.3V LDO Voltage Regulator (e.g. AMS1117-3.3) ============ */}
    <chip
      name="U2"
      manufacturerPartNumber="AMS1117-3.3"
      footprint="sot223"
      pinLabels={{
        pin1: "GND",
        pin2: "VOUT",
        pin3: "VIN",
        pin4: "VOUT2",
      }}
      pcbX={-10}
      pcbY={-10}
      schX={-8}
      schY={-8}
    />

    {/* ============ W25Q16 Flash (QSPI) ============ */}
    <chip
      name="U3"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint="soic8"
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
      pcbX={12}
      pcbY={-10}
      schX={10}
      schY={-8}
    />

    {/* ============ 12 MHz Crystal ============ */}
    <chip
      name="Y1"
      manufacturerPartNumber="ABM8-12.000MHZ"
      footprint="pinrow4"
      pinLabels={{
        pin1: "XIN",
        pin2: "GND1",
        pin3: "XOUT",
        pin4: "GND2",
      }}
      pcbX={10}
      pcbY={5}
      schX={5}
      schY={5}
    />

    {/* ============ LED + Resistor on GPIO25 ============ */}
    <led
      name="LED1"
      color="green"
      footprint="0603"
      pcbX={18}
      pcbY={5}
      schX={14}
      schY={3}
    />
    <resistor
      name="R1"
      resistance="330"
      footprint="0402"
      pcbX={15}
      pcbY={5}
      schX={12}
      schY={3}
    />

    {/* ============ Decoupling Capacitors ============ */}
    {/* IOVDD decoupling */}
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={-5} pcbY={6} schX={-3} schY={6} />
    <capacitor name="C2" capacitance="100nF" footprint="0402" pcbX={-3} pcbY={6} schX={-1} schY={6} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={-1} pcbY={6} schX={1} schY={6} />

    {/* DVDD decoupling */}
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={3} pcbY={6} schX={3} schY={6} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={5} pcbY={6} schX={5} schY={6} />

    {/* USB_VDD decoupling */}
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={7} pcbY={6} schX={7} schY={6} />

    {/* ADC_AVDD decoupling */}
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={9} pcbY={6} schX={9} schY={6} />

    {/* LDO input/output caps */}
    <capacitor name="C8" capacitance="10uF" footprint="0805" pcbX={-13} pcbY={-10} schX={-12} schY={-8} />
    <capacitor name="C9" capacitance="10uF" footprint="0805" pcbX={-7} pcbY={-10} schX={-5} schY={-8} />

    {/* VREG_VOUT decoupling (1uF) */}
    <capacitor name="C10" capacitance="1uF" footprint="0402" pcbX={1} pcbY={6} schX={-1} schY={8} />

    {/* Crystal load caps */}
    <capacitor name="C11" capacitance="15pF" footprint="0402" pcbX={8} pcbY={8} schX={3} schY={5} />
    <capacitor name="C12" capacitance="15pF" footprint="0402" pcbX={12} pcbY={8} schX={7} schY={5} />

    {/* ============ Pull-up/down Resistors ============ */}
    {/* CC1/CC2 pull-down for USB-C (5.1k each for device mode) */}
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX={-18} pcbY={-6} schX={-18} schY={-4} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={-18} pcbY={-8} schX={-18} schY={-6} />

    {/* ============ BOOT and RESET Buttons ============ */}
    <chip
      name="SW1"
      footprint="pinrow2"
      pinLabels={{
        pin1: "A",
        pin2: "B",
      }}
      pcbX={-5}
      pcbY={-12}
      schX={-5}
      schY={-12}
    />
    <chip
      name="SW2"
      footprint="pinrow2"
      pinLabels={{
        pin1: "A",
        pin2: "B",
      }}
      pcbX={5}
      pcbY={-12}
      schX={0}
      schY={-12}
    />

    {/* Pull-up for RUN pin */}
    <resistor name="R4" resistance="10k" footprint="0402" pcbX={5} pcbY={-8} schX={0} schY={-10} />

    {/* ============ Power Net Connections ============ */}

    {/* USB VBUS -> LDO VIN */}
    <trace from=".J1 > .VBUS1" to="net.VBUS" />
    <trace from=".J1 > .VBUS2" to="net.VBUS" />
    <trace from=".J1 > .VBUS3" to="net.VBUS" />
    <trace from=".U2 > .VIN" to="net.VBUS" />
    <trace from=".C8 > .pin1" to="net.VBUS" />

    {/* LDO output -> 3V3 rail */}
    <trace from=".U2 > .VOUT" to="net.VCC3V3" />
    <trace from=".U2 > .VOUT2" to="net.VCC3V3" />
    <trace from=".C9 > .pin1" to="net.VCC3V3" />

    {/* 3V3 -> RP2040 IOVDD pins */}
    <trace from=".U1 > .IOVDD1" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD2" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD3" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD4" to="net.VCC3V3" />
    <trace from=".U1 > .IOVDD5" to="net.VCC3V3" />

    {/* 3V3 -> RP2040 USB_VDD */}
    <trace from=".U1 > .USB_VDD" to="net.VCC3V3" />

    {/* 3V3 -> RP2040 ADC_AVDD */}
    <trace from=".U1 > .ADC_AVDD" to="net.VCC3V3" />

    {/* 3V3 -> VREG_VIN */}
    <trace from=".U1 > .VREG_VIN" to="net.VCC3V3" />

    {/* VREG_VOUT -> DVDD */}
    <trace from=".U1 > .VREG_VOUT" to="net.DVDD" />
    <trace from=".U1 > .DVDD1" to="net.DVDD" />
    <trace from=".U1 > .DVDD2" to="net.DVDD" />
    <trace from=".U1 > .DVDD3" to="net.DVDD" />
    <trace from=".C10 > .pin1" to="net.DVDD" />

    {/* 3V3 -> Flash VCC */}
    <trace from=".U3 > .VCC" to="net.VCC3V3" />

    {/* Decoupling caps to 3V3 rail */}
    <trace from=".C1 > .pin1" to="net.VCC3V3" />
    <trace from=".C2 > .pin1" to="net.VCC3V3" />
    <trace from=".C3 > .pin1" to="net.VCC3V3" />
    <trace from=".C6 > .pin1" to="net.VCC3V3" />
    <trace from=".C7 > .pin1" to="net.VCC3V3" />

    {/* DVDD decoupling */}
    <trace from=".C4 > .pin1" to="net.DVDD" />
    <trace from=".C5 > .pin1" to="net.DVDD" />

    {/* ============ GND Net Connections ============ */}
    <trace from=".J1 > .GND1" to="net.GND" />
    <trace from=".U1 > .GND" to="net.GND" />
    <trace from=".U2 > .GND" to="net.GND" />
    <trace from=".U3 > .GND" to="net.GND" />
    <trace from=".U1 > .TESTEN" to="net.GND" />

    {/* Cap GND connections */}
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

    {/* Crystal GND */}
    <trace from=".Y1 > .GND1" to="net.GND" />
    <trace from=".Y1 > .GND2" to="net.GND" />

    {/* CC pull-down resistors to GND */}
    <trace from=".R2 > .pin2" to="net.GND" />
    <trace from=".R3 > .pin2" to="net.GND" />

    {/* Button GND connections */}
    <trace from=".SW1 > .B" to="net.GND" />
    <trace from=".SW2 > .B" to="net.GND" />

    {/* LED GND */}
    <trace from=".LED1 > .pin2" to="net.GND" />

    {/* ============ USB Data Lines ============ */}
    <trace from=".J1 > .DP1" to=".U1 > .USB_DP" />
    <trace from=".J1 > .DN1" to=".U1 > .USB_DM" />

    {/* ============ Crystal Connections ============ */}
    <trace from=".Y1 > .XIN" to=".U1 > .XIN" />
    <trace from=".Y1 > .XOUT" to=".U1 > .XOUT" />

    {/* Crystal load caps */}
    <trace from=".C11 > .pin1" to=".U1 > .XIN" />
    <trace from=".C12 > .pin1" to=".U1 > .XOUT" />

    {/* ============ QSPI Flash Connections ============ */}
    <trace from=".U1 > .QSPI_SS" to=".U3 > .CS" />
    <trace from=".U1 > .QSPI_SCLK" to=".U3 > .CLK" />
    <trace from=".U1 > .QSPI_SD0" to=".U3 > .DI" />
    <trace from=".U1 > .QSPI_SD1" to=".U3 > .DO" />
    <trace from=".U1 > .QSPI_SD2" to=".U3 > .WP" />
    <trace from=".U1 > .QSPI_SD3" to=".U3 > .HOLD" />

    {/* ============ LED on GPIO25 ============ */}
    <trace from=".U1 > .GPIO25" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".LED1 > .pin1" />

    {/* ============ USB-C CC Pull-downs ============ */}
    <trace from=".J1 > .CC1" to=".R2 > .pin1" />
    <trace from=".J1 > .CC2" to=".R3 > .pin1" />

    {/* ============ BOOTSEL Button (active low on QSPI_SS) ============ */}
    <trace from=".SW1 > .A" to=".U1 > .QSPI_SS" />

    {/* ============ RESET Button ============ */}
    <trace from=".SW2 > .A" to=".U1 > .RUN" />
    <trace from=".R4 > .pin1" to="net.VCC3V3" />
    <trace from=".R4 > .pin2" to=".U1 > .RUN" />
  </board>
)