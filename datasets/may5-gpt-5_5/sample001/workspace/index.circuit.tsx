const rp2040Pins = {
  pin1: ["IOVDD_1", "VDDIO"],
  pin2: "GPIO0",
  pin3: "GPIO1",
  pin4: "GPIO2",
  pin5: "GPIO3",
  pin6: "GPIO4",
  pin7: "GPIO5",
  pin8: "GPIO6",
  pin9: "GPIO7",
  pin10: ["IOVDD_2", "VDDIO"],
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
  pin22: ["IOVDD_3", "VDDIO"],
  pin23: ["DVDD_1", "DVDD"],
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GPIO16",
  pin28: "GPIO17",
  pin29: "GPIO18",
  pin30: "GPIO19",
  pin31: "GPIO20",
  pin32: "GPIO21",
  pin33: ["IOVDD_4", "VDDIO"],
  pin34: "GPIO22",
  pin35: "GPIO23",
  pin36: "GPIO24",
  pin37: "GPIO25",
  pin38: "GPIO26_ADC0",
  pin39: "GPIO27_ADC1",
  pin40: "GPIO28_ADC2",
  pin41: "GPIO29_ADC3",
  pin42: ["IOVDD_5", "VDDIO"],
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: ["IOVDD_6", "VDDIO"],
  pin50: ["DVDD_2", "DVDD"],
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_SS_N",
} as const

const flashPins = {
  pin1: "CS_N",
  pin2: "SO_IO1",
  pin3: "WP_IO2",
  pin4: "GND",
  pin5: "SI_IO0",
  pin6: "SCLK",
  pin7: "HOLD_IO3",
  pin8: "VCC",
} as const

const ldoPins = {
  pin1: "GND",
  pin2: "VOUT",
  pin3: "VIN",
} as const

const usbCPins = {
  pin1: ["A1", "GND1", "GND"],
  pin2: ["A4", "VBUS1", "VBUS"],
  pin3: ["A5", "CC1"],
  pin4: ["A6", "DP1", "DP"],
  pin5: ["A7", "DM1", "DN"],
  pin6: ["A8", "SBU1"],
  pin7: ["A9", "VBUS2", "VBUS"],
  pin8: ["A12", "GND2", "GND"],
  pin9: ["B1", "GND3", "GND"],
  pin10: ["B4", "VBUS3", "VBUS"],
  pin11: ["B5", "CC2"],
  pin12: ["B6", "DP2", "DP"],
  pin13: ["B7", "DM2", "DN"],
  pin14: ["B8", "SBU2"],
  pin15: ["B9", "VBUS4", "VBUS"],
  pin16: ["B12", "GND4", "GND"],
  pin17: ["SH", "SHELL1", "SHLD"],
} as const

export default () => (
  <board width="56mm" height="32mm" layers={4} autorouter="sequential-trace">
    <chip
      name="U1"
      footprint="qfn56_w7mm_h7mm_p0.4mm"
      pinLabels={rp2040Pins}
      supplierPartNumbers={{ jlcpcb: ["C2040"] }}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
    />

    <connector
      name="J1"
      standard="usb_c"
      footprint="kicad:Connector_USB/USB_C_Receptacle_HRO_TYPE-C-31-M-12"
      pinLabels={usbCPins}
      supplierPartNumbers={{ jlcpcb: ["C165948"] }}
      pcbX={-24.5}
      pcbY={0}
      pcbRotation={-90}
      schX={-9}
      schY={2}
      schWidth={0.85}
    />

    <chip
      name="U2"
      footprint="soic8_w5.3mm_p1.27mm_pw0.6mm_pl1mm"
      pinLabels={flashPins}
      supplierPartNumbers={{ jlcpcb: ["C2843335"] }}
      pcbX={10}
      pcbY={2.5}
      schX={6}
      schY={1.5}
    />

    <chip
      name="U3"
      footprint="sot23_w1.92mm_h2.74mm_p0.95mm_pl0.8mm_pw0.764mm"
      pinLabels={ldoPins}
      supplierPartNumbers={{ jlcpcb: ["C347376"] }}
      pcbX={-9.5}
      pcbY={-5.5}
      pcbRotation={180}
      schX={-5}
      schY={-2}
      schHeight={0.4}
    />

    <crystal
      name="Y1"
      frequency="27MHz"
      loadCapacitance="10pF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C9008"] }}
      pcbX={7}
      pcbY={-4}
      schX={3.5}
      schY={-3.5}
    />

    <pinheader
      name="J2"
      pinCount={20}
      footprint="pinrow20_p2.54mm_id1mm_od1.5mm_male"
      pinLabels={[
        "VBUS",
        "GND",
        "V3_3",
        "RUN",
        "GPIO0",
        "GPIO1",
        "GPIO2",
        "GPIO3",
        "GPIO4",
        "GPIO5",
        "GPIO6",
        "GPIO7",
        "GPIO8",
        "GPIO9",
        "GPIO10",
        "GPIO11",
        "GPIO12",
        "GPIO13",
        "GPIO14",
        "GPIO15",
      ]}
      pcbX={0}
      pcbY={14}
      schX={0}
      schY={6}
      schWidth={0.77}
    />

    <pinheader
      name="J3"
      pinCount={20}
      footprint="pinrow20_p2.54mm_id1mm_od1.5mm_male"
      pinLabels={[
        "GND",
        "V3_3",
        "SWCLK",
        "SWDIO",
        "GPIO16",
        "GPIO17",
        "GPIO18",
        "GPIO19",
        "GPIO20",
        "GPIO21",
        "GPIO22",
        "GPIO23",
        "GPIO24",
        "GPIO25",
        "GPIO26_ADC0",
        "GPIO27_ADC1",
        "GPIO28_ADC2",
        "GPIO29_ADC3",
        "ADC_AVDD",
        "TESTEN",
      ]}
      pcbX={0}
      pcbY={-14}
      pcbRotation={180}
      schX={7}
      schY={6}
      schWidth={1.245}
    />

    <pushbutton
      name="SW1"
      footprint="pushbutton"
      pinLabels={{ pin1: "A", pin2: "B" }}
      pcbX={22}
      pcbY={5}
      schX={8}
      schY={-3}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton"
      pinLabels={{ pin1: "A", pin2: "B" }}
      pcbX={22}
      pcbY={-5}
      schX={8}
      schY={-5}
    />

    <resistor name="R1" resistance="5.1k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25905"] }} pcbX={-14} pcbY={3.7} schX={-6.5} schY={3.9} />
    <resistor name="R2" resistance="5.1k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25905"] }} pcbX={-14} pcbY={2.4} schX={-6.5} schY={3.1} />
    <resistor name="R3" resistance="27" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25102"] }} pcbX={-7.5} pcbY={1.2} schX={-4.6} schY={2.2} />
    <resistor name="R4" resistance="27" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25102"] }} pcbX={-7.5} pcbY={-1.2} schX={-4.6} schY={1.4} />
    <resistor name="R5" resistance="1k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C11702"] }} pcbX={19} pcbY={-10.8} schX={5.9} schY={-5.6} />
    <resistor name="R6" resistance="10k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25744"] }} pcbX={17} pcbY={5} schX={5.8} schY={-2.6} />
    <resistor name="R7" resistance="10k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25744"] }} pcbX={12} pcbY={5.8} schX={8.9} schY={1.5} />

    <led name="D1" color="green" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C72043"] }} pcbX={22} pcbY={-10.8} schX={7.5} schY={-5.6} />

    <capacitor name="C1" capacitance="10uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C19702"] }} pcbX={-13.5} pcbY={-8.2} schX={-7.2} schY={-2.8} schOrientation="vertical" />
    <capacitor name="C2" capacitance="10uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C19702"] }} pcbX={-5.2} pcbY={-8.2} schX={-3.2} schY={-3.6} schOrientation="vertical" />
    <capacitor name="C3" capacitance="1uF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C52923"] }} pcbX={-3.8} pcbY={-4.8} schX={-1.8} schY={-3.7} schOrientation="vertical" />
    <capacitor name="C4" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={-3.8} pcbY={-6.2} schX={-0.4} schY={-3.7} schOrientation="vertical" />
    <capacitor name="C5" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={0} pcbY={5.2} schX={-2.8} schY={3.7} schOrientation="vertical" />
    <capacitor name="C6" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={2} pcbY={5.2} schX={-1.4} schY={3.7} schOrientation="vertical" />
    <capacitor name="C7" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={4} pcbY={5.2} schX={-4.2} schY={3.7} schOrientation="vertical" />
    <capacitor name="C8" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={6} pcbY={5.2} schX={1.4} schY={3.7} schOrientation="vertical" />
    <capacitor name="C9" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={8} pcbY={6.5} schX={2.8} schY={3.7} schOrientation="vertical" />
    <capacitor name="C10" capacitance="1uF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C52923"] }} pcbX={2.5} pcbY={-4.8} schX={2.1} schY={-2.6} schOrientation="vertical" />
    <capacitor name="C11" capacitance="18pF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1549"] }} pcbX={5.4} pcbY={-6.2} schX={4.8} schY={-4.6} schOrientation="vertical" />
    <capacitor name="C12" capacitance="18pF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1549"] }} pcbX={8.6} pcbY={-7.4} schX={2.4} schY={-4.8} schOrientation="vertical" />

    <silkscreentext text="RP2040 BREAKOUT" pcbX={0} pcbY={7.4} fontSize={1} />
    <silkscreentext text="USB" pcbX={-24.5} pcbY={5.8} fontSize={0.8} />
    <silkscreentext text="LED" pcbX={22} pcbY={-13.8} fontSize={0.7} />

    <trace from="J1.VBUS1" to="net.VBUS" />
    <trace from="J1.VBUS2" to="net.VBUS" />
    <trace from="J1.VBUS3" to="net.VBUS" />
    <trace from="J1.VBUS4" to="net.VBUS" />
    <trace from="J1.GND1" to="net.GND" />
    <trace from="J1.GND2" to="net.GND" />
    <trace from="J1.GND3" to="net.GND" />
    <trace from="J1.GND4" to="net.GND" />
    <trace from="J1.SHELL1" to="net.GND" />
    <trace from="J1.CC1" to="R1.pin1" />
    <trace from="J1.CC2" to="R2.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="J1.DP1" to="R3.pin1" />
    <trace from="J1.DP2" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.USB_DP" />
    <trace from="J1.DM1" to="R4.pin1" />
    <trace from="J1.DM2" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DM" />

    <trace from="U3.VIN" to="net.VBUS" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.VDDIO" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_VIN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="C3.pin1" />
    <trace from="U1.DVDD" to="C4.pin1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin1" to="net.V3_3" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="C9.pin1" to="net.V3_3" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="C10.pin1" to="U1.ADC_AVDD" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.pin1" />
    <trace from="U1.XOUT" to="Y1.pin2" />
    <trace from="Y1.pin1" to="C11.pin1" />
    <trace from="Y1.pin2" to="C12.pin1" />
    <trace from="C11.pin2" to="net.GND" />
    <trace from="C12.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS_N" to="U2.CS_N" />
    <trace from="U1.QSPI_SD0" to="U2.SI_IO0" />
    <trace from="U1.QSPI_SD1" to="U2.SO_IO1" />
    <trace from="U1.QSPI_SD2" to="U2.WP_IO2" />
    <trace from="U1.QSPI_SD3" to="U2.HOLD_IO3" />
    <trace from="U1.QSPI_SCLK" to="U2.SCLK" />
    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.CS_N" to="R7.pin1" />
    <trace from="R7.pin2" to="net.V3_3" />

    <trace from="U1.GPIO25" to="R5.pin1" />
    <trace from="R5.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    <trace from="U1.RUN" to="R6.pin1" />
    <trace from="R6.pin2" to="net.V3_3" />
    <trace from="U1.RUN" to="SW1.A" />
    <trace from="SW1.B" to="net.GND" />
    <trace from="U2.CS_N" to="SW2.A" />
    <trace from="SW2.B" to="net.GND" />

    <trace from="U1.SWCLK" to="J3.SWCLK" />
    <trace from="U1.SWDIO" to="J3.SWDIO" />
    <trace from="J2.VBUS" to="net.VBUS" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="J2.V3_3" to="net.V3_3" />
    <trace from="J2.RUN" to="U1.RUN" />
    <trace from="J3.GND" to="net.GND" />
    <trace from="J3.V3_3" to="net.V3_3" />

    <trace from="U1.GPIO0" to="J2.GPIO0" />
    <trace from="U1.GPIO1" to="J2.GPIO1" />
    <trace from="U1.GPIO2" to="J2.GPIO2" />
    <trace from="U1.GPIO3" to="J2.GPIO3" />
    <trace from="U1.GPIO4" to="J2.GPIO4" />
    <trace from="U1.GPIO5" to="J2.GPIO5" />
    <trace from="U1.GPIO6" to="J2.GPIO6" />
    <trace from="U1.GPIO7" to="J2.GPIO7" />
    <trace from="U1.GPIO8" to="J2.GPIO8" />
    <trace from="U1.GPIO9" to="J2.GPIO9" />
    <trace from="U1.GPIO10" to="J2.GPIO10" />
    <trace from="U1.GPIO11" to="J2.GPIO11" />
    <trace from="U1.GPIO12" to="J2.GPIO12" />
    <trace from="U1.GPIO13" to="J2.GPIO13" />
    <trace from="U1.GPIO14" to="J2.GPIO14" />
    <trace from="U1.GPIO15" to="J2.GPIO15" />
    <trace from="U1.GPIO16" to="J3.GPIO16" />
    <trace from="U1.GPIO17" to="J3.GPIO17" />
    <trace from="U1.GPIO18" to="J3.GPIO18" />
    <trace from="U1.GPIO19" to="J3.GPIO19" />
    <trace from="U1.GPIO20" to="J3.GPIO20" />
    <trace from="U1.GPIO21" to="J3.GPIO21" />
    <trace from="U1.GPIO22" to="J3.GPIO22" />
    <trace from="U1.GPIO23" to="J3.GPIO23" />
    <trace from="U1.GPIO24" to="J3.GPIO24" />
    <trace from="U1.GPIO25" to="J3.GPIO25" />
    <trace from="U1.GPIO26_ADC0" to="J3.GPIO26_ADC0" />
    <trace from="U1.GPIO27_ADC1" to="J3.GPIO27_ADC1" />
    <trace from="U1.GPIO28_ADC2" to="J3.GPIO28_ADC2" />
    <trace from="U1.GPIO29_ADC3" to="J3.GPIO29_ADC3" />
    <trace from="U1.ADC_AVDD" to="J3.ADC_AVDD" />
    <trace from="U1.TESTEN" to="J3.TESTEN" />
  </board>
)
