import React from "react"
import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"
import { RP2040 } from "./imports/RP2040"
import { TS_1101_C_W } from "./imports/TS_1101_C_W"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

const jlc = (part: string) => ({ jlcpcb: [part] })

const leftHeaderPins = [
  { label: "GP0", target: "U1.GPIO0" },
  { label: "GP1", target: "U1.GPIO1" },
  { label: "GND", target: "net.GND" },
  { label: "GP2", target: "U1.GPIO2" },
  { label: "GP3", target: "U1.GPIO3" },
  { label: "GP4", target: "U1.GPIO4" },
  { label: "GP5", target: "U1.GPIO5" },
  { label: "GND", target: "net.GND" },
  { label: "GP6", target: "U1.GPIO6" },
  { label: "GP7", target: "U1.GPIO7" },
  { label: "GP8", target: "U1.GPIO8" },
  { label: "GP9", target: "U1.GPIO9" },
  { label: "GND", target: "net.GND" },
  { label: "GP10", target: "U1.GPIO10" },
  { label: "GP11", target: "U1.GPIO11" },
  { label: "GP12", target: "U1.GPIO12" },
  { label: "GP13", target: "U1.GPIO13" },
  { label: "GND", target: "net.GND" },
  { label: "GP14", target: "U1.GPIO14" },
  { label: "GP15", target: "U1.GPIO15" },
] as const

const rightHeaderPins = [
  { label: "GP16", target: "U1.GPIO16" },
  { label: "GP17", target: "U1.GPIO17" },
  { label: "GND", target: "net.GND" },
  { label: "GP18", target: "U1.GPIO18" },
  { label: "GP19", target: "U1.GPIO19" },
  { label: "GP20", target: "U1.GPIO20" },
  { label: "GP21", target: "U1.GPIO21" },
  { label: "GND", target: "net.GND" },
  { label: "GP22", target: "U1.GPIO22" },
  { label: "GP23", target: "U1.GPIO23" },
  { label: "GP24", target: "U1.GPIO24" },
  { label: "GP25", target: "U1.GPIO25" },
  { label: "GND", target: "net.GND" },
  { label: "GP26", target: "U1.GPIO26_ADC0" },
  { label: "GP27", target: "U1.GPIO27_ADC1" },
  { label: "GP28", target: "U1.GPIO28_ADC2" },
  { label: "GP29", target: "U1.GPIO29_ADC3" },
  { label: "RUN", target: "U1.RUN" },
  { label: "3V3", target: "net.V3_3" },
  { label: "VBUS", target: "net.VBUS" },
] as const

export default () => (
  <board width="25mm" height="55mm" layers={2}>
    <pinheader
      name="J1"
      pinCount={20}
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels={false}
      pinLabels={leftHeaderPins.map((pin) => pin.label)}
      pcbX="-10.2mm"
      pcbY="0mm"
      pcbRotation={90}
      schX="-30mm"
      schY="0mm"
    />
    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      gender="unpopulated"
      showSilkscreenPinLabels={false}
      pinLabels={rightHeaderPins.map((pin) => pin.label)}
      pcbX="10.2mm"
      pcbY="0mm"
      pcbRotation={90}
      schX="30mm"
      schY="0mm"
    />

    <TYPE_C_16PIN_2MD_073_
      name="USB1"
      pcbX="0mm"
      pcbY="-23.7mm"
      pcbRotation={180}
      schX="-6mm"
      schY="-34mm"
    />
    <ME6211C33M5G_N
      name="U2"
      pcbX="-4.5mm"
      pcbY="-17.8mm"
      pcbRotation={90}
      schX="-18mm"
      schY="-22mm"
    />
    <RP2040
      name="U1"
      pcbX="0mm"
      pcbY="2mm"
      pcbRotation={180}
      schX="0mm"
      schY="-2mm"
    />
    <W25Q16JVSSIQ
      name="U3"
      pcbX="0mm"
      pcbY="14mm"
      pcbRotation={90}
      schX="22mm"
      schY="-2mm"
    />
    <X322512MSB4SI
      name="Y1"
      pcbX="-5.6mm"
      pcbY="4mm"
      pcbRotation={90}
      schX="-18mm"
      schY="8mm"
    />
    <TS_1101_C_W
      name="SW1"
      pcbX="-5.2mm"
      pcbY="16.5mm"
      schX="-20mm"
      schY="18mm"
    />

    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={jlc("C23186")}
      pcbX="-3.2mm"
      pcbY="-20.2mm"
      schX="-6mm"
      schY="-30mm"
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={jlc("C23186")}
      pcbX="3.2mm"
      pcbY="-20.2mm"
      schX="6mm"
      schY="-30mm"
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0603"
      supplierPartNumbers={jlc("C2907021")}
      pcbX="-1.2mm"
      pcbY="-15.5mm"
      schX="-8mm"
      schY="-20mm"
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0603"
      supplierPartNumbers={jlc("C2907021")}
      pcbX="1.2mm"
      pcbY="-15.5mm"
      schX="0mm"
      schY="-20mm"
    />
    <resistor
      name="R5"
      resistance="10k"
      footprint="0603"
      supplierPartNumbers={jlc("C25804")}
      pcbX="5.8mm"
      pcbY="-1.2mm"
      pcbRotation={90}
      schX="22mm"
      schY="10mm"
    />
    <resistor
      name="R6"
      resistance="1k"
      footprint="0603"
      supplierPartNumbers={jlc("C21190")}
      pcbX="4.7mm"
      pcbY="19.6mm"
      pcbRotation={90}
      schX="16mm"
      schY="22mm"
    />

    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={jlc("C15850")}
      pcbX="-6.8mm"
      pcbY="-17.7mm"
      pcbRotation={90}
      schX="-26mm"
      schY="-22mm"
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={jlc("C15850")}
      pcbX="-2.1mm"
      pcbY="-17.7mm"
      pcbRotation={90}
      schX="-10mm"
      schY="-22mm"
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      supplierPartNumbers={jlc("C52923")}
      pcbX="3.7mm"
      pcbY="6.7mm"
      pcbRotation={90}
      schX="18mm"
      schY="8mm"
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={jlc("C1525")}
      pcbX="-3mm"
      pcbY="-1.8mm"
      pcbRotation={90}
      schX="-14mm"
      schY="-8mm"
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={jlc("C1525")}
      pcbX="3mm"
      pcbY="-1.8mm"
      pcbRotation={90}
      schX="14mm"
      schY="-8mm"
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={jlc("C1525")}
      pcbX="-3mm"
      pcbY="5.6mm"
      pcbRotation={90}
      schX="-14mm"
      schY="2mm"
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={jlc("C1525")}
      pcbX="3mm"
      pcbY="5.6mm"
      pcbRotation={90}
      schX="14mm"
      schY="2mm"
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      supplierPartNumbers={jlc("C1525")}
      pcbX="-1.8mm"
      pcbY="11.5mm"
      pcbRotation={90}
      schX="12mm"
      schY="16mm"
    />
    <capacitor
      name="C9"
      capacitance="12pF"
      footprint="0402"
      supplierPartNumbers={jlc("C1547")}
      pcbX="-7.6mm"
      pcbY="2.9mm"
      pcbRotation={90}
      schX="-26mm"
      schY="8mm"
    />
    <capacitor
      name="C10"
      capacitance="12pF"
      footprint="0402"
      supplierPartNumbers={jlc("C1547")}
      pcbX="-7.6mm"
      pcbY="5.1mm"
      pcbRotation={90}
      schX="-26mm"
      schY="12mm"
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      supplierPartNumbers={jlc("C7371905")}
      pcbX="4.7mm"
      pcbY="22.2mm"
      pcbRotation={90}
      schX="24mm"
      schY="22mm"
    />

    {leftHeaderPins.map((pin, index) => (
      <React.Fragment key={`left-${index}`}>
        <trace from={`J1.pin${index + 1}`} to={pin.target} />
      </React.Fragment>
    ))}
    {rightHeaderPins.map((pin, index) => (
      <React.Fragment key={`right-${index}`}>
        <trace from={`J2.pin${index + 1}`} to={pin.target} />
      </React.Fragment>
    ))}

    <trace from="USB1.VBUS1" to="net.VBUS" />
    <trace from="USB1.VBUS2" to="net.VBUS" />
    <trace from="USB1.GND1" to="net.GND" />
    <trace from="USB1.GND2" to="net.GND" />
    <trace from="USB1.SHELL1" to="net.GND" />
    <trace from="USB1.SHELL2" to="net.GND" />
    <trace from="USB1.pin13_alt1" to="net.GND" />
    <trace from="USB1.pin14_alt1" to="net.GND" />
    <trace from="USB1.CC1" to="R1.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="USB1.CC2" to="R2.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="USB1.DP1" to="R4.pin1" />
    <trace from="USB1.DP2" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DP" />
    <trace from="USB1.DN1" to="R3.pin1" />
    <trace from="USB1.DN2" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.USB_DM" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.CE" to="net.VBUS" />
    <trace from="U2.VSS" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.VREG_1V1" />
    <trace from="C3.pin1" to="net.VREG_1V1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.DVDD1" to="net.V3_3" />
    <trace from="U1.DVDD2" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="U1.RUN" to="R5.pin1" />
    <trace from="R5.pin2" to="net.V3_3" />

    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="C7.pin1" to="net.V3_3" />
    <trace from="C7.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.OSC1" />
    <trace from="U1.XOUT" to="Y1.OSC2" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="U1.XIN" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />

    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="U1.QSPI_SS" to="U3.pin1" />
    <trace from="U1.QSPI_SD1" to="U3.pin2" />
    <trace from="U1.QSPI_SD2" to="U3.IO2" />
    <trace from="U1.QSPI_SD0" to="U3.pin5" />
    <trace from="U1.QSPI_SCLK" to="U3.CLK" />
    <trace from="U1.QSPI_SD3" to="U3.IO3" />

    <trace from="SW1.pin1" to="U1.QSPI_SS" />
    <trace from="SW1.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R6.pin1" />
    <trace from="R6.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />
  </board>
)
