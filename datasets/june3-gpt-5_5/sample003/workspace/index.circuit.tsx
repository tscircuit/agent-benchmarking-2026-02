import { RP2040 } from "./imports/RP2040"

const gpioLeft = [
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
  "GPIO6",
  "GPIO7",
] as const

const gpioRight = [
  "GPIO16",
  "GPIO17",
  "GPIO18",
  "GPIO19",
  "GPIO20",
  "GPIO21",
  "GPIO22",
  "GPIO26_ADC0",
] as const

const leftHeaderLabels = ["VBUS", "GND", "3V3", ...gpioLeft] as const
const rightHeaderLabels = ["RUN", "SWCLK", "SWD", "GND", ...gpioRight] as const

const powerPins = [
  "IOVDD1",
  "IOVDD2",
  "IOVDD3",
  "IOVDD4",
  "IOVDD5",
  "IOVDD6",
  "USB_VDD",
  "ADC_AVDD",
  "VREG_IN",
] as const

const decouplers = [
  { name: "C1", capacitance: "100nF", x: -7.2, y: 8.1, schX: -3.6, schY: 4.8 },
  { name: "C2", capacitance: "100nF", x: -4.8, y: 8.1, schX: -2.2, schY: 4.8 },
  { name: "C3", capacitance: "100nF", x: -2.4, y: 8.1, schX: -0.8, schY: 4.8 },
  { name: "C4", capacitance: "1uF", x: 0, y: 8.1, schX: 0.6, schY: 4.8 },
] as const

const Flash = (props: any) => (
  <chip
    pinLabels={{
      pin1: "CS",
      pin2: "IO1",
      pin3: "IO2",
      pin4: "GND",
      pin5: "IO0",
      pin6: "SCLK",
      pin7: "IO3",
      pin8: "VCC",
    }}
    manufacturerPartNumber="W25Q16JVSSIQ"
    supplierPartNumbers={{ jlcpcb: ["C82317"] }}
    footprint="soic8_p1.27mm"
    {...props}
  />
)

const Ldo = (props: any) => (
  <chip
    pinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "EN",
      pin4: "NC",
      pin5: "VOUT",
    }}
    manufacturerPartNumber="XC6220B331MR-G"
    supplierPartNumbers={{ jlcpcb: ["C86533"] }}
    footprint="sot23_5"
    {...props}
  />
)

const smallButtonFootprint = (
  <footprint>
    <smtpad portHints={["pin1"]} pcbX="-1.25mm" pcbY="0" width="1.4mm" height="1mm" shape="rect" />
    <smtpad portHints={["pin2"]} pcbX="1.25mm" pcbY="0" width="1.4mm" height="1mm" shape="rect" />
    <silkscreenrect pcbX="0" pcbY="0" width="4mm" height="2.4mm" />
  </footprint>
)

export default () => (
  <board width="64mm" height="58mm" layers={2} autorouterEffortLevel="10x">
    <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} schHeight={5.8} />

    <Flash name="U2" pcbX={0} pcbY={-8.6} schX={7} schY={-2} />
    <Ldo name="U3" pcbX={-13.5} pcbY={8.6} schX={-8} schY={4} schHeight={0.6} />

    <connector
      name="JUSB"
      standard="usb_c"
      pcbX={0}
      pcbY={25.3}
      pcbRotation={180}
      schX={-8}
      schY={8}
      schWidth={1.15}
    />

    <pinheader
      name="J1"
      pinCount={leftHeaderLabels.length}
      pinLabels={[...leftHeaderLabels]}
      gender="female"
      pitch="2.54mm"
      footprint={`pinrow${leftHeaderLabels.length}`}
      pcbX={-29}
      pcbY={0}
      pcbRotation={90}
      schX={-10}
      schY={-3}
      schWidth={0.77}
      showSilkscreenPinLabels
    />

    <pinheader
      name="J2"
      pinCount={rightHeaderLabels.length}
      pinLabels={[...rightHeaderLabels]}
      gender="female"
      pitch="2.54mm"
      footprint={`pinrow${rightHeaderLabels.length}`}
      pcbX={29}
      pcbY={0}
      pcbRotation={90}
      schX={10}
      schY={-3}
      schWidth={1.245}
      showSilkscreenPinLabels
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="10pF"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0" width="1.2mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0" width="1.2mm" height="1.6mm" shape="rect" />
          <silkscreenrect pcbX="0" pcbY="0" width="3.2mm" height="2.5mm" />
        </footprint>
      }
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      pcbX={-8.8}
      pcbY={-6.8}
      schX={-7}
      schY={-5}
    />

    <resistor name="R1" resistance="27" footprint="0402" pcbX={-4.2} pcbY={7.1} schX={-3} schY={7} />
    <resistor name="R2" resistance="27" footprint="0402" pcbX={4.2} pcbY={7.1} schX={-3} schY={6} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={-9.8} pcbY={11.4} schX={-7} schY={6} />
    <resistor name="R4" resistance="5.1k" footprint="0402" pcbX={9.8} pcbY={11.4} schX={-7} schY={5} />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX={3.9} pcbY={-4.8} schX={5} schY={3} />
    <resistor name="R6" resistance="1k" footprint="0402" pcbX={3.2} pcbY={-13.8} schX={7} schY={1} />

    <led name="D1" color="green" footprint="0603" pcbX={0.2} pcbY={-13.8} schX={9} schY={1} />

    <pushbutton name="SW_BOOT" footprint={smallButtonFootprint} pcbX={-5.8} pcbY={-9.4} schX={4} schY={-5} />
    <pushbutton name="SW_RESET" footprint={smallButtonFootprint} pcbX={5.8} pcbY={-6.2} schX={4} schY={-7} />

    {decouplers.map((cap) => (
      <capacitor
        name={cap.name}
        capacitance={cap.capacitance}
        footprint="0402"
        schOrientation="vertical"
        pcbX={cap.x}
        pcbY={cap.y}
        schX={cap.schX}
        schY={cap.schY}
      />
    ))}

    <capacitor name="C8" capacitance="1uF" footprint="0402" schOrientation="vertical" pcbX={-10.5} pcbY={8.6} schX={-6} schY={4} />
    <capacitor name="C9" capacitance="10uF" footprint="0603" schOrientation="vertical" pcbX={-17.4} pcbY={8.6} schX={-10} schY={4} />
    <capacitor name="C10" capacitance="1uF" footprint="0402" schOrientation="vertical" pcbX={-4.8} pcbY={-4.8} schX={2} schY={3} />
    <capacitor name="C11" capacitance="10pF" footprint="0402" schOrientation="vertical" pcbX={-11.7} pcbY={-5.7} schX={-9} schY={-6} />
    <capacitor name="C12" capacitance="10pF" footprint="0402" schOrientation="vertical" pcbX={-11.7} pcbY={-7.9} schX={-9} schY={-7.4} />

    <silkscreentext text="RP2040 BREAKOUT" pcbX={0} pcbY={-26.2} fontSize={1.1} />
    <silkscreentext text="USB" pcbX={0} pcbY={24.2} fontSize={0.8} />
    <silkscreentext text="GP25" pcbX={0.2} pcbY={-12.2} fontSize={0.7} />

    <trace from="JUSB.VBUS1" to="net.VBUS" />
    <trace from="JUSB.VBUS2" to="net.VBUS" />
    <trace from="JUSB.GND1" to="net.GND" />
    <trace from="JUSB.GND2" to="net.GND" />
    <trace from="JUSB.DP1" to="R1.pin1" />
    <trace from="JUSB.DP2" to="R1.pin1" />
    <trace from="R1.pin2" to="U1.USB_DP" />
    <trace from="JUSB.DM1" to="R2.pin1" />
    <trace from="JUSB.DM2" to="R2.pin1" />
    <trace from="R2.pin2" to="U1.USB_DM" />
    <trace from="JUSB.CC1" to="R3.pin1" />
    <trace from="R3.pin2" to="net.GND" />
    <trace from="JUSB.CC2" to="R4.pin1" />
    <trace from="R4.pin2" to="net.GND" />

    <trace from="U3.VIN" to="net.VBUS" />
    <trace from="U3.EN" to="net.VBUS" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="C9.pin1" to="net.VBUS" />
    <trace from="C9.pin2" to="net.GND" />

    {powerPins.map((pin) => (
      <trace from={`U1.${pin}`} to="net.V3_3" />
    ))}
    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="C10.pin1" to="net.V1_1" />
    <trace from="C10.pin2" to="net.GND" />

    {decouplers.map((cap) => (
      <trace from={`${cap.name}.pin1`} to="net.V3_3" />
    ))}
    {decouplers.map((cap) => (
      <trace from={`${cap.name}.pin2`} to="net.GND" />
    ))}

    <trace from="U1.XIN" to="Y1.pin1" />
    <trace from="U1.XOUT" to="Y1.pin2" />
    <trace from="Y1.pin1" to="C11.pin1" />
    <trace from="C11.pin2" to="net.GND" />
    <trace from="Y1.pin2" to="C12.pin1" />
    <trace from="C12.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS" to="U2.CS" />
    <trace from="U1.QSPI_SD0" to="U2.IO0" />
    <trace from="U1.QSPI_SD1" to="U2.IO1" />
    <trace from="U1.QSPI_SD2" to="U2.IO2" />
    <trace from="U1.QSPI_SD3" to="U2.IO3" />
    <trace from="U1.QSPI_SCLK" to="U2.SCLK" />
    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />

    <trace from="U1.RUN" to="R5.pin1" />
    <trace from="R5.pin2" to="net.V3_3" />
    <trace from="SW_RESET.pin1" to="U1.RUN" />
    <trace from="SW_RESET.pin2" to="net.GND" />
    <trace from="SW_BOOT.pin1" to="U1.QSPI_SS" />
    <trace from="SW_BOOT.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R6.pin1" />
    <trace from="R6.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    {leftHeaderLabels.map((label, index) => (
      <trace from={`J1.pin${index + 1}`} to={label === "3V3" ? "net.V3_3" : `net.${label}`} />
    ))}
    {rightHeaderLabels.map((label, index) => (
      <trace from={`J2.pin${index + 1}`} to={label === "GND" ? "net.GND" : `net.${label}`} />
    ))}

    {gpioLeft.map((gpio) => (
      <trace from={`U1.${gpio}`} to={`net.${gpio}`} />
    ))}
    {gpioRight.map((gpio) => (
      <trace from={`U1.${gpio}`} to={`net.${gpio}`} />
    ))}
    <trace from="U1.RUN" to="net.RUN" />
    <trace from="U1.SWCLK" to="net.SWCLK" />
    <trace from="U1.SWD" to="net.SWD" />
  </board>
)
