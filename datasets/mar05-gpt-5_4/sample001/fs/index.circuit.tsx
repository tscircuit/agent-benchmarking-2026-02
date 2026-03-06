const rp2040PinLabels = {
  pin1: "GND",
  pin2: "IOVDD",
  pin3: "GPIO0",
  pin4: "GPIO1",
  pin5: "GPIO2",
  pin6: "GPIO3",
  pin7: "GPIO4",
  pin8: "GPIO5",
  pin9: "GPIO6",
  pin10: "GPIO7",
  pin11: "IOVDD",
  pin12: "GPIO8",
  pin13: "GPIO9",
  pin14: "GPIO10",
  pin15: "GPIO11",
  pin16: "GPIO12",
  pin17: "GPIO13",
  pin18: "GPIO14",
  pin19: "GPIO15",
  pin20: "TESTEN",
  pin21: "XIN",
  pin22: "XOUT",
  pin23: "IOVDD",
  pin24: "DVDD",
  pin25: "SWCLK",
  pin26: "SWD",
  pin27: "RUN",
  pin28: "GPIO16",
  pin29: "GPIO17",
  pin30: "GPIO18",
  pin31: "GPIO19",
  pin32: "GPIO20",
  pin33: "GPIO21",
  pin34: "IOVDD",
  pin35: "GPIO22",
  pin36: "GPIO23",
  pin37: "GPIO24",
  pin38: "GPIO25",
  pin39: "GPIO26_ADC0",
  pin40: "GPIO27_ADC1",
  pin41: "GPIO28_ADC2",
  pin42: "GPIO29_ADC3",
  pin43: "ADC_AVDD",
  pin44: "VREG_IN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: "IOVDD",
  pin50: "GPIO30",
  pin51: "GPIO31",
  pin52: "GPIO32",
  pin53: "GPIO33",
  pin54: "GPIO34",
  pin55: "GPIO35",
  pin56: "QSPI_SS",
  pin57: "QSPI_SD1",
  pin58: "QSPI_SD2",
  pin59: "QSPI_SD3",
  pin60: "QSPI_SCLK",
  pin61: "QSPI_SD0",
  pin62: "IOVDD",
  pin63: "DVDD",
  pin64: "GND",
} as const

export default function Rp2040Breakout() {
  return (
    <board width="46mm" height="24mm" routingDisabled>
      <chip
        name="U1"
        footprint="qfn64"
        pinLabels={rp2040PinLabels}
        supplierPartNumbers={{ jlcpcb: ["C2040"] }}
        pcbX={0}
        pcbY={0}
        schX={0}
        schY={0}
      />

      <chip
        name="J1"
        footprint="usb_c_16pin"
        pinLabels={{
          pin1: "GND",
          pin2: "VBUS",
          pin3: "CC1",
          pin4: "DP1",
          pin5: "DN1",
          pin6: "SBU1",
          pin7: "VBUS",
          pin8: "GND",
          pin9: "GND",
          pin10: "VBUS",
          pin11: "CC2",
          pin12: "DP2",
          pin13: "DN2",
          pin14: "SBU2",
          pin15: "VBUS",
          pin16: "GND",
        }}
        supplierPartNumbers={{ jlcpcb: ["C2765186"] }}
        pcbX={-18}
        pcbY={0}
        pcbRotation={90}
        schX={-10}
        schY={0}
      />

      <crystal
        name="Y1"
        frequency="12MHz"
        loadCapacitance="10pF"
        footprint="3225"
        supplierPartNumbers={{ jlcpcb: ["C9002"] }}
        pcbX={0}
        pcbY={8.5}
        schX={0}
        schY={8}
      />

      <capacitor
        name="C1"
        capacitance="100nF"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C14663"] }}
        pcbX={-5.5}
        pcbY={8.5}
      />
      <capacitor
        name="C2"
        capacitance="100nF"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C14663"] }}
        pcbX={5.5}
        pcbY={8.5}
      />
      <capacitor
        name="C3"
        capacitance="1uF"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C15849"] }}
        pcbX={6.5}
        pcbY={-7.5}
      />
      <capacitor
        name="C4"
        capacitance="1uF"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C15849"] }}
        pcbX={2.5}
        pcbY={-10}
      />

      <resistor
        name="R1"
        resistance="1k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C21190"] }}
        pcbX={13}
        pcbY={8}
        pcbRotation={90}
        schX={12}
        schY={7}
      />
      <led
        name="D1"
        color="green"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C125098"] }}
        pcbX={13}
        pcbY={12}
        pcbRotation={90}
        schX={12}
        schY={10}
      />

      <resistor
        name="R2"
        resistance="5.1k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C23186"] }}
        pcbX={-12.5}
        pcbY={-7}
        pcbRotation={90}
      />
      <resistor
        name="R3"
        resistance="5.1k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C23186"] }}
        pcbX={-9.5}
        pcbY={-7}
        pcbRotation={90}
      />

      <resistor
        name="R4"
        resistance="10k"
        footprint="0603"
        supplierPartNumbers={{ jlcpcb: ["C98220"] }}
        pcbX={8.5}
        pcbY={-3.5}
        pcbRotation={90}
      />

      <chip
        name="U2"
        footprint="sot23-5"
        supplierPartNumbers={{ jlcpcb: ["C2846984"] }}
        pinLabels={{
          pin1: "VIN",
          pin2: "GND",
          pin3: "EN",
          pin4: "NC",
          pin5: "VOUT",
        }}
        pcbX={-3}
        pcbY={-9}
        schX={-5}
        schY={-9}
      />

      <pinheader
        name="H1"
        pinCount={10}
        pitch="2.54mm"
        showSilkscreenPinLabels
        pinLabels={{
          pin1: "VBUS",
          pin2: "3V3",
          pin3: "GND",
          pin4: "GPIO0",
          pin5: "GPIO1",
          pin6: "GPIO2",
          pin7: "GPIO3",
          pin8: "GPIO4",
          pin9: "GPIO5",
          pin10: "GPIO6",
        }}
        pcbX={0}
        pcbY={-9.5}
        schX={17}
        schY={-2}
      />

      <trace from="J1.VBUS" to="net.VBUS" />
      <trace from="J1.VBUS" to="U2.VIN" />
      <trace from="J1.GND" to="net.GND" />
      <trace from="J1.CC1" to="R2.pin1" />
      <trace from="J1.CC2" to="R3.pin1" />
      <trace from="R2.pin2" to="net.GND" />
      <trace from="R3.pin2" to="net.GND" />
      <trace from="J1.DP1" to="U1.USB_DP" />
      <trace from="J1.DP2" to="U1.USB_DP" />
      <trace from="J1.DN1" to="U1.USB_DM" />
      <trace from="J1.DN2" to="U1.USB_DM" />

      <trace from="U2.GND" to="net.GND" />
      <trace from="U2.EN" to="net.VBUS" />
      <trace from="U2.VOUT" to="net.V3_3" />

      <trace from="C1.pin1" to="net.V3_3" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />
      <trace from="C3.pin1" to="net.VBUS" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="C4.pin1" to="net.V3_3" />
      <trace from="C4.pin2" to="net.GND" />

      <trace from="Y1.pin1" to="U1.XIN" />
      <trace from="Y1.pin2" to="U1.XOUT" />

      <trace from="U1.IOVDD" to="net.V3_3" />
      <trace from="U1.DVDD" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />
      <trace from="U1.VREG_IN" to="net.V3_3" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.GND" to="net.GND" />
      <trace from="U1.TESTEN" to="net.GND" />
      <trace from="U1.RUN" to="R4.pin1" />
      <trace from="R4.pin2" to="net.V3_3" />

      <trace from="U1.GPIO25" to="R1.pin1" />
      <trace from="R1.pin2" to="D1.pin1" />
      <trace from="D1.pin2" to="net.GND" />

      <trace from="H1.VBUS" to="net.VBUS" />
      <trace from="H1.3V3" to="net.V3_3" />
      <trace from="H1.GND" to="net.GND" />
      <trace from="H1.GPIO0" to="U1.GPIO0" />
      <trace from="H1.GPIO1" to="U1.GPIO1" />
      <trace from="H1.GPIO2" to="U1.GPIO2" />
      <trace from="H1.GPIO3" to="U1.GPIO3" />
      <trace from="H1.GPIO4" to="U1.GPIO4" />
      <trace from="H1.GPIO5" to="U1.GPIO5" />
      <trace from="H1.GPIO6" to="U1.GPIO6" />

      <silkscreentext text="RP2040 Breakout" pcbX={0} pcbY={10.5} fontSize={1.3} />
      <silkscreentext text="USB-C / 3V3 / LED" pcbX={0} pcbY={-11.5} fontSize={0.9} />
    </board>
  )
}