import React from "react"

export default () => (
  <board width="50mm" height="40mm" routingDisabled>
    {/* ========== RP2040 Microcontroller (QFN-56) ========== */}
    <chip
      name="U1"
      footprint="qfn56_w7_h7_p0.4mm_thermalpad3.2x3.2"
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
        pin23: "DVDD_1",
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
        pin38: "GPIO26_ADC0",
        pin39: "GPIO27_ADC1",
        pin40: "GPIO28_ADC2",
        pin41: "GPIO29_ADC3",
        pin42: "IOVDD_5",
        pin43: "ADC_AVDD",
        pin44: "VREG_IN",
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
        pin57: "GND_PAD",
      }}
      schX={0}
      schY={0}
      pcbX={0}
      pcbY={0}
    />

    {/* ========== USB-C Connector ========== */}
    <chip
      name="J1"
      footprint="pinrow4"
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
      }}
      schX={-15}
      schY={0}
      pcbX={-20}
      pcbY={0}
    />

    {/* ========== W25Q128 Flash (SOIC-8) ========== */}
    <chip
      name="U2"
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
      schX={15}
      schY={0}
      pcbX={14}
      pcbY={-10}
    />

    {/* ========== 12MHz Crystal (HC49) ========== */}
    <chip
      name="Y1"
      footprint="pinrow2"
      pinLabels={{
        pin1: "XIN",
        pin2: "XOUT",
      }}
      schX={0}
      schY={-10}
      pcbX={-10}
      pcbY={-12}
    />

    {/* ========== LED on GPIO25 ========== */}
    <led
      name="LED1"
      footprint="0603"
      color="green"
      schX={12}
      schY={-10}
      pcbX={18}
      pcbY={8}
    />

    {/* LED current-limiting resistor (330 ohm) */}
    <resistor
      name="R1"
      resistance="330"
      footprint="0402"
      schX={8}
      schY={-10}
      pcbX={14}
      pcbY={8}
    />

    {/* ========== Crystal Load Capacitors ========== */}
    <capacitor name="C1" capacitance="20pF" footprint="0402" schX={-3} schY={-13} pcbX={-13} pcbY={-10} />
    <capacitor name="C2" capacitance="20pF" footprint="0402" schX={3} schY={-13} pcbX={-7} pcbY={-10} />

    {/* ========== Decoupling Capacitors ========== */}
    {/* IOVDD decoupling */}
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={-5} pcbY={5} schX={-8} schY={5} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={5} pcbY={5} schX={-5} schY={5} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-5} pcbY={-5} schX={-2} schY={5} />

    {/* DVDD decoupling */}
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={5} pcbY={-5} schX={1} schY={5} />

    {/* USB_VDD decoupling */}
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={-15} pcbY={5} schX={4} schY={5} />

    {/* ADC_AVDD decoupling */}
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={10} pcbY={5} schX={7} schY={5} />

    {/* VREG_VOUT decoupling (1uF) */}
    <capacitor name="C9" capacitance="1uF" footprint="0402" pcbX={10} pcbY={-5} schX={10} schY={5} />

    {/* VREG_IN bulk cap */}
    <capacitor name="C10" capacitance="10uF" footprint="0805" pcbX={-15} pcbY={-5} schX={13} schY={5} />

    {/* ========== 10k Pull-up on RUN (enable) ========== */}
    <resistor name="R2" resistance="10k" footprint="0402" schX={-5} schY={-8} pcbX={-10} pcbY={5} />

    {/* ========== 27 ohm USB series resistors ========== */}
    <resistor name="R3" resistance="27" footprint="0402" schX={-12} schY={-3} pcbX={-18} pcbY={-5} />
    <resistor name="R4" resistance="27" footprint="0402" schX={-12} schY={3} pcbX={-18} pcbY={5} />

    {/* ========== 1k pull-up on QSPI_SS ========== */}
    <resistor name="R5" resistance="1k" footprint="0402" schX={18} schY={-5} pcbX={18} pcbY={-10} />

    {/* ========== TESTEN pull-down ========== */}
    <resistor name="R6" resistance="10k" footprint="0402" schX={-5} schY={-5} pcbX={-8} pcbY={8} />

    {/* ======================== */}
    {/* ===== POWER TRACES ===== */}
    {/* ======================== */}

    {/* --- GND connections --- */}
    <trace from=".U1 > .GND_PAD" to="net.GND" />
    <trace from=".J1 > .GND" to="net.GND" />
    <trace from=".U2 > .GND" to="net.GND" />
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
    <trace from=".LED1 > .cathode" to="net.GND" />
    <trace from=".R6 > .pin2" to="net.GND" />

    {/* --- USB VBUS -> VREG_IN and USB_VDD --- */}
    <trace from=".J1 > .VBUS" to="net.VBUS" />
    <trace from=".U1 > .VREG_IN" to="net.VBUS" />
    <trace from=".U1 > .USB_VDD" to="net.VBUS" />
    <trace from=".C7 > .pin1" to="net.VBUS" />
    <trace from=".C10 > .pin1" to="net.VBUS" />

    {/* --- VREG_VOUT -> 3.3V rail --- */}
    <trace from=".U1 > .VREG_VOUT" to="net.V3_3" />
    <trace from=".C9 > .pin1" to="net.V3_3" />

    {/* --- IOVDD all tied to 3.3V --- */}
    <trace from=".U1 > .IOVDD_1" to="net.V3_3" />
    <trace from=".U1 > .IOVDD_2" to="net.V3_3" />
    <trace from=".U1 > .IOVDD_3" to="net.V3_3" />
    <trace from=".U1 > .IOVDD_4" to="net.V3_3" />
    <trace from=".U1 > .IOVDD_5" to="net.V3_3" />
    <trace from=".U1 > .IOVDD_6" to="net.V3_3" />
    <trace from=".C3 > .pin1" to="net.V3_3" />
    <trace from=".C4 > .pin1" to="net.V3_3" />
    <trace from=".C5 > .pin1" to="net.V3_3" />

    {/* --- DVDD tied to 3.3V (core via internal regulator) --- */}
    <trace from=".U1 > .DVDD_1" to="net.V3_3" />
    <trace from=".U1 > .DVDD_2" to="net.V3_3" />
    <trace from=".C6 > .pin1" to="net.V3_3" />

    {/* --- ADC_AVDD --- */}
    <trace from=".U1 > .ADC_AVDD" to="net.V3_3" />
    <trace from=".C8 > .pin1" to="net.V3_3" />

    {/* --- Flash VCC --- */}
    <trace from=".U2 > .VCC" to="net.V3_3" />

    {/* =========================== */}
    {/* ===== USB DATA TRACES ===== */}
    {/* =========================== */}
    <trace from=".J1 > .DM" to=".R3 > .pin1" />
    <trace from=".R3 > .pin2" to=".U1 > .USB_DM" />
    <trace from=".J1 > .DP" to=".R4 > .pin1" />
    <trace from=".R4 > .pin2" to=".U1 > .USB_DP" />

    {/* ============================== */}
    {/* ===== CRYSTAL OSCILLATOR ===== */}
    {/* ============================== */}
    <trace from=".U1 > .XIN" to=".Y1 > .XIN" />
    <trace from=".U1 > .XOUT" to=".Y1 > .XOUT" />
    <trace from=".C1 > .pin1" to=".Y1 > .XIN" />
    <trace from=".C2 > .pin1" to=".Y1 > .XOUT" />

    {/* =============================== */}
    {/* ===== QSPI FLASH (W25Q128) ==== */}
    {/* =============================== */}
    <trace from=".U1 > .QSPI_SS" to=".U2 > .CS" />
    <trace from=".U1 > .QSPI_SCLK" to=".U2 > .CLK" />
    <trace from=".U1 > .QSPI_SD0" to=".U2 > .DI" />
    <trace from=".U1 > .QSPI_SD1" to=".U2 > .DO" />
    <trace from=".U1 > .QSPI_SD2" to=".U2 > .WP" />
    <trace from=".U1 > .QSPI_SD3" to=".U2 > .HOLD" />

    {/* QSPI_SS pull-up */}
    <trace from=".R5 > .pin1" to="net.V3_3" />
    <trace from=".R5 > .pin2" to=".U1 > .QSPI_SS" />

    {/* ======================== */}
    {/* ===== LED on GPIO25 ==== */}
    {/* ======================== */}
    <trace from=".U1 > .GPIO25" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".LED1 > .anode" />

    {/* ================================= */}
    {/* ===== RUN pull-up (enable) ====== */}
    {/* ================================= */}
    <trace from=".R2 > .pin1" to="net.V3_3" />
    <trace from=".R2 > .pin2" to=".U1 > .RUN" />

    {/* ===== TESTEN pull-down ===== */}
    <trace from=".R6 > .pin1" to=".U1 > .TESTEN" />
  </board>
)