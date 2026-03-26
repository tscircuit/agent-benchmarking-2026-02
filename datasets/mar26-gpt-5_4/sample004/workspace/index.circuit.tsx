import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { XC6206P332MR } from "./imports/XC6206P332MR"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

const LEFT_HEADER_LABELS = [
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
]

const RIGHT_HEADER_LABELS = [
  "SWCLK",
  "SWD",
  "GND",
  "V3_3",
  "GPIO29",
  "GPIO28",
  "GPIO27",
  "GPIO26",
  "GPIO25",
  "GPIO24",
  "GPIO23",
  "GPIO22",
  "GPIO21",
  "GPIO20",
  "GPIO19",
  "GPIO18",
  "GPIO17",
  "GPIO16",
]

export default () => (
  <board width="24mm" height="56mm" layers={2}>
    <pinheader
      name="J1"
      pinCount={20}
      pinLabels={LEFT_HEADER_LABELS}
      showSilkscreenPinLabels
      pcbX="-10.16mm"
      pcbY="0mm"
      pcbRotation={90}
      schX="-18mm"
      schY="0mm"
    />
    <pinheader
      name="J2"
      pinCount={18}
      pinLabels={RIGHT_HEADER_LABELS}
      showSilkscreenPinLabels
      pcbX="10.16mm"
      pcbY="2.54mm"
      pcbRotation={90}
      schX="18mm"
      schY="0mm"
    />

    <TYPE_C_16PIN_2MD_073_
      name="USB1"
      pcbX="0mm"
      pcbY="23.2mm"
      pcbRotation={180}
      schX="0mm"
      schY="-20mm"
    />

    <XC6206P332MR
      name="U3"
      pcbX="-4.7mm"
      pcbY="15.5mm"
      pcbRotation={180}
      schX="-14mm"
      schY="-12mm"
    />
    <capacitor
      name="CIN"
      capacitance="1uF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C52923"] }}
      pcbX="-8mm"
      pcbY="15.5mm"
      schX="-18mm"
      schY="-10mm"
    />
    <capacitor
      name="COUT"
      capacitance="10uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C19702"] }}
      pcbX="-1.6mm"
      pcbY="15.5mm"
      schX="-10mm"
      schY="-10mm"
    />

    <resistor
      name="RCC1"
      resistance="5.1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      pcbX="-2.4mm"
      pcbY="19.2mm"
      pcbRotation={90}
      schX="-6mm"
      schY="-18mm"
    />
    <resistor
      name="RCC2"
      resistance="5.1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      pcbX="2.4mm"
      pcbY="19.2mm"
      pcbRotation={90}
      schX="6mm"
      schY="-18mm"
    />
    <resistor
      name="RUSBP"
      resistance="27"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C138021"] }}
      pcbX="2.2mm"
      pcbY="15.7mm"
      pcbRotation={90}
      schX="6mm"
      schY="-14mm"
    />
    <resistor
      name="RUSBN"
      resistance="27"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C138021"] }}
      pcbX="4.2mm"
      pcbY="15.7mm"
      pcbRotation={90}
      schX="10mm"
      schY="-14mm"
    />

    <RP2040
      name="U1"
      pcbX="0mm"
      pcbY="5mm"
      schX="0mm"
      schY="0mm"
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="-5.8mm"
      pcbY="7.4mm"
      schX="-10mm"
      schY="6mm"
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="-5.8mm"
      pcbY="2.8mm"
      schX="-10mm"
      schY="4mm"
    />
    <capacitor
      name="C3"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="5.8mm"
      pcbY="7.4mm"
      schX="10mm"
      schY="6mm"
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="5.8mm"
      pcbY="2.8mm"
      schX="10mm"
      schY="4mm"
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="0mm"
      pcbY="10.6mm"
      schX="0mm"
      schY="8mm"
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="0mm"
      pcbY="-0.8mm"
      schX="0mm"
      schY="-6mm"
    />
    <capacitor
      name="CVREG"
      capacitance="1uF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C52923"] }}
      pcbX="2.8mm"
      pcbY="10.8mm"
      schX="8mm"
      schY="8mm"
    />
    <capacitor
      name="CFLASH"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      pcbX="2.6mm"
      pcbY="-7.4mm"
      schX="10mm"
      schY="-6mm"
    />

    <W25Q16JVUXIQ
      name="U2"
      pcbX="0mm"
      pcbY="-6mm"
      schX="14mm"
      schY="0mm"
    />

    <X322512MSB4SI
      name="Y1"
      pcbX="-4.8mm"
      pcbY="-6.2mm"
      schX="-12mm"
      schY="-4mm"
    />
    <capacitor
      name="CX1"
      capacitance="12pF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1547"] }}
      pcbX="-7.8mm"
      pcbY="-7.6mm"
      schX="-18mm"
      schY="-6mm"
    />
    <capacitor
      name="CX2"
      capacitance="12pF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C1547"] }}
      pcbX="-7.8mm"
      pcbY="-4.8mm"
      schX="-18mm"
      schY="-2mm"
    />
    <resistor
      name="RXTAL"
      resistance="1M"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C26083"] }}
      pcbX="-4.8mm"
      pcbY="-9.2mm"
      schX="-12mm"
      schY="-8mm"
    />

    <resistor
      name="RRUN"
      resistance="10k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25744"] }}
      pcbX="5.2mm"
      pcbY="-2.4mm"
      pcbRotation={90}
      schX="8mm"
      schY="-2mm"
    />

    <resistor
      name="RLED"
      resistance="1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
      pcbX="6mm"
      pcbY="-11.4mm"
      pcbRotation={90}
      schX="12mm"
      schY="-10mm"
    />
    <led
      name="D1"
      color="red"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C965799"] }}
      pcbX="6mm"
      pcbY="-14.4mm"
      pcbRotation={180}
      schX="16mm"
      schY="-10mm"
    />

    <trace from="USB1.VBUS1" to="net.VBUS" />
    <trace from="USB1.VBUS2" to="net.VBUS" />
    <trace from="USB1.GND1" to="net.GND" />
    <trace from="USB1.GND2" to="net.GND" />
    <trace from="USB1.SHELL1" to="net.GND" />
    <trace from="USB1.SHELL2" to="net.GND" />
    <trace from="USB1.pin13_alt1" to="net.GND" />
    <trace from="USB1.pin14_alt1" to="net.GND" />
    <trace from="USB1.CC1" to="RCC1.pin1" />
    <trace from="RCC1.pin2" to="net.GND" />
    <trace from="USB1.CC2" to="RCC2.pin1" />
    <trace from="RCC2.pin2" to="net.GND" />
    <trace from="USB1.DP1" to="net.USB_DP_CONN" />
    <trace from="USB1.DP2" to="net.USB_DP_CONN" />
    <trace from="USB1.DN1" to="net.USB_DM_CONN" />
    <trace from="USB1.DN2" to="net.USB_DM_CONN" />
    <trace from="net.USB_DP_CONN" to="RUSBP.pin1" />
    <trace from="RUSBP.pin2" to="U1.USB_DP" />
    <trace from="net.USB_DM_CONN" to="RUSBN.pin1" />
    <trace from="RUSBN.pin2" to="U1.USB_DM" />

    <trace from="net.VBUS" to="U3.VIN" />
    <trace from="net.VBUS" to="CIN.pin1" />
    <trace from="CIN.pin2" to="net.GND" />
    <trace from="U3.VSS" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="net.V3_3" to="COUT.pin1" />
    <trace from="COUT.pin2" to="net.GND" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="C1.pin1" to="net.V3_3" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="CFLASH.pin1" to="net.V3_3" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="CFLASH.pin2" to="net.GND" />

    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="CVREG.pin1" to="net.V1_1" />
    <trace from="CVREG.pin2" to="net.GND" />

    <trace from="U1.RUN" to="RRUN.pin1" />
    <trace from="RRUN.pin2" to="net.V3_3" />

    <trace from="U1.XIN" to="net.XIN" />
    <trace from="Y1.OSC1" to="net.XIN" />
    <trace from="CX1.pin1" to="net.XIN" />
    <trace from="CX1.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="net.XOUT" />
    <trace from="Y1.OSC2" to="net.XOUT" />
    <trace from="CX2.pin1" to="net.XOUT" />
    <trace from="CX2.pin2" to="net.GND" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="RXTAL.pin1" to="net.XIN" />
    <trace from="RXTAL.pin2" to="net.XOUT" />

    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.EP" to="net.GND" />
    <trace from="U1.QSPI_SS" to="U2.CS" />
    <trace from="U1.QSPI_SCLK" to="U2.CLK" />
    <trace from="U1.QSPI_SD0" to="U2.pin5" />
    <trace from="U1.QSPI_SD1" to="U2.pin2" />
    <trace from="U1.QSPI_SD2" to="U2.pin3" />
    <trace from="U1.QSPI_SD3" to="U2.pin7" />

    <trace from="U1.GPIO25" to="RLED.pin1" />
    <trace from="RLED.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    <trace from="J1.pin1" to="net.VBUS" />
    <trace from="J1.pin2" to="net.GND" />
    <trace from="J1.pin3" to="net.V3_3" />
    <trace from="J1.pin4" to="U1.RUN" />
    <trace from="J1.pin5" to="U1.GPIO0" />
    <trace from="J1.pin6" to="U1.GPIO1" />
    <trace from="J1.pin7" to="U1.GPIO2" />
    <trace from="J1.pin8" to="U1.GPIO3" />
    <trace from="J1.pin9" to="U1.GPIO4" />
    <trace from="J1.pin10" to="U1.GPIO5" />
    <trace from="J1.pin11" to="U1.GPIO6" />
    <trace from="J1.pin12" to="U1.GPIO7" />
    <trace from="J1.pin13" to="U1.GPIO8" />
    <trace from="J1.pin14" to="U1.GPIO9" />
    <trace from="J1.pin15" to="U1.GPIO10" />
    <trace from="J1.pin16" to="U1.GPIO11" />
    <trace from="J1.pin17" to="U1.GPIO12" />
    <trace from="J1.pin18" to="U1.GPIO13" />
    <trace from="J1.pin19" to="U1.GPIO14" />
    <trace from="J1.pin20" to="U1.GPIO15" />

    <trace from="J2.pin1" to="U1.SWCLK" />
    <trace from="J2.pin2" to="U1.SWD" />
    <trace from="J2.pin3" to="net.GND" />
    <trace from="J2.pin4" to="net.V3_3" />
    <trace from="J2.pin5" to="U1.GPIO29_ADC3" />
    <trace from="J2.pin6" to="U1.GPIO28_ADC2" />
    <trace from="J2.pin7" to="U1.GPIO27_ADC1" />
    <trace from="J2.pin8" to="U1.GPIO26_ADC0" />
    <trace from="J2.pin9" to="U1.GPIO25" />
    <trace from="J2.pin10" to="U1.GPIO24" />
    <trace from="J2.pin11" to="U1.GPIO23" />
    <trace from="J2.pin12" to="U1.GPIO22" />
    <trace from="J2.pin13" to="U1.GPIO21" />
    <trace from="J2.pin14" to="U1.GPIO20" />
    <trace from="J2.pin15" to="U1.GPIO19" />
    <trace from="J2.pin16" to="U1.GPIO18" />
    <trace from="J2.pin17" to="U1.GPIO17" />
    <trace from="J2.pin18" to="U1.GPIO16" />
  </board>
)
