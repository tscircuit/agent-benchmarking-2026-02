import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { W25Q32JVSSIQ } from "./imports/W25Q32JVSSIQ"

const gpioHeaderLeft = [
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
  "GPIO6",
  "GPIO7",
  "GND",
  "V3_3",
]

const gpioHeaderRight = [
  "GPIO8",
  "GPIO9",
  "GPIO10",
  "GPIO11",
  "GPIO12",
  "GPIO13",
  "GPIO14",
  "GPIO15",
  "RUN",
  "VBUS",
]

export default () => (
  <board width="56mm" height="42mm" layers={2}>
    <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} schHeight={5.8} />

    <W25Q32JVSSIQ
      name="U2"
      pcbX={0}
      pcbY={9.5}
      pcbRotation={180}
      schX={6}
      schY={0}
    />

    <AP2112K_3_3TRG1
      name="U3"
      pcbX={-11}
      pcbY={-7.5}
      pcbRotation={180}
      schX={-6}
      schY={4}
      schHeight={0.6}
    />

    <connector
      name="J1"
      standard="usb_c"
      pcbX={0}
      pcbY={-14.2}
      pcbRotation={0}
      schX={-6}
      schY={-2}
      schWidth={0.85}
    />

    <pinheader
      name="J2"
      pinCount={10}
      pitch="2.54mm"
      gender="female"
      pinLabels={gpioHeaderLeft}
      showSilkscreenPinLabels
      footprint="pinrow10"
      pcbX={-22}
      pcbY={0}
      pcbRotation={90}
      schX={-8}
      schY={-6}
      schWidth={0.675}
    />

    <pinheader
      name="J3"
      pinCount={10}
      pitch="2.54mm"
      gender="female"
      pinLabels={gpioHeaderRight}
      showSilkscreenPinLabels
      footprint="pinrow10"
      pcbX={22}
      pcbY={0}
      pcbRotation={90}
      schX={8}
      schY={-6}
      schWidth={0.77}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={6.5}
      pcbY={15}
      schX={4}
      schY={5}
    />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C21190"] }}
      pcbX={3.5}
      pcbY={15}
      schX={2.5}
      schY={5}
    />

    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C23186"] }}
      pcbX={-8}
      pcbY={-12.5}
      schX={-8}
      schY={-4}
    />
    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C23186"] }}
      pcbX={8}
      pcbY={-12.5}
      schX={-4}
      schY={-4}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="12pF"
      footprint="hc49"
      pcbX={0}
      pcbY={-8}
      schX={-4}
      schY={5}
    />
    <capacitor
      name="C1"
      capacitance="18pF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C1648"] }}
      pcbX={-15}
      pcbY={-5.5}
      schX={-6}
      schY={6}
      schOrientation="vertical"
    />
    <capacitor
      name="C2"
      capacitance="18pF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C1648"] }}
      pcbX={8.5}
      pcbY={-9}
      schX={-2}
      schY={6}
      schOrientation="vertical"
    />

    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      pcbX={-16}
      pcbY={-11}
      schX={-8}
      schY={2}
      schOrientation="vertical"
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      pcbX={-16}
      pcbY={-8.5}
      schX={-4}
      schY={2}
      schOrientation="vertical"
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={5}
      pcbY={8}
      schX={-2}
      schY={2}
      schOrientation="vertical"
    />
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      pcbX={9}
      pcbY={8}
      schX={2}
      schY={2}
      schOrientation="vertical"
    />

    <pushbutton
      name="SW1"
      footprint="pushbutton"
      pcbX={-12}
      pcbY={14}
      schX={-6}
      schY={7}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton"
      pcbX={12}
      pcbY={14}
      schX={6}
      schY={7}
    />

    <silkscreentext text="RP2040 USB BREAKOUT" pcbX={0} pcbY={17.2} fontSize={1} />
    <silkscreentext text="BOOT" pcbX={-12} pcbY={9.5} fontSize={0.7} />
    <silkscreentext text="RUN" pcbX={12} pcbY={9.5} fontSize={0.7} />

    <trace schDisplayLabel="" from=".J1 > .pin18" to="net.VBUS" width="0.35mm" />
    <trace schDisplayLabel="" from=".J1 > .pin27" to="net.VBUS" width="0.35mm" />
    <trace schDisplayLabel="" from=".J1 > .pin17" to="net.GND" width="0.35mm" />
    <trace schDisplayLabel="" from=".J1 > .pin28" to="net.GND" width="0.35mm" />
    <trace schDisplayLabel="" from=".J1 > .pin13" to="net.GND" />
    <trace schDisplayLabel="" from=".J1 > .pin14" to="net.GND" />
    <trace schDisplayLabel="" from=".J1 > .pin15" to="net.GND" />
    <trace schDisplayLabel="" from=".J1 > .pin16" to="net.GND" />
    <trace schDisplayLabel="" from=".J1 > .pin21" to=".U1 > .USB_DM" width="0.18mm" />
    <trace schDisplayLabel="" from=".J1 > .pin23" to=".U1 > .USB_DM" width="0.18mm" />
    <trace schDisplayLabel="" from=".J1 > .pin22" to=".U1 > .USB_DP" width="0.18mm" />
    <trace schDisplayLabel="" from=".J1 > .pin24" to=".U1 > .USB_DP" width="0.18mm" />
    <trace schDisplayLabel="" from=".J1 > .pin20" to=".R2 > .pin1" />
    <trace schDisplayLabel="" from=".J1 > .pin26" to=".R3 > .pin1" />
    <trace schDisplayLabel="" from=".R2 > .pin2" to="net.GND" />
    <trace schDisplayLabel="" from=".R3 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".U3 > .VIN" to="net.VBUS" width="0.35mm" />
    <trace schDisplayLabel="" from=".U3 > .EN" to="net.VBUS" />
    <trace schDisplayLabel="" from=".U3 > .GND" to="net.GND" />
    <trace schDisplayLabel="" from=".U3 > .VOUT" to="net.V3_3" width="0.35mm" />
    <trace schDisplayLabel="" from=".C3 > .pin1" to="net.VBUS" />
    <trace schDisplayLabel="" from=".C3 > .pin2" to="net.GND" />
    <trace schDisplayLabel="" from=".C4 > .pin1" to="net.V3_3" />
    <trace schDisplayLabel="" from=".C4 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".U1 > .VREG_IN" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .VREG_VOUT" to=".C6 > .pin1" />
    <trace schDisplayLabel="" from=".C6 > .pin2" to="net.GND" />
    <trace schDisplayLabel="" from=".U1 > .USB_VDD" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .ADC_AVDD" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .GND" to="net.GND" />
    <trace schDisplayLabel="" from=".U1 > .DVDD1" to="net.GND" />
    <trace schDisplayLabel="" from=".U1 > .DVDD2" to="net.GND" />
    <trace schDisplayLabel="" from=".C5 > .pin1" to="net.V3_3" />
    <trace schDisplayLabel="" from=".C5 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".U1 > .IOVDD1" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .IOVDD2" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .IOVDD3" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .IOVDD4" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .IOVDD5" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .IOVDD6" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U1 > .TESTEN" to="net.GND" />

    <trace schDisplayLabel="" from=".U1 > .XIN" to=".Y1 > .pin1" />
    <trace schDisplayLabel="" from=".U1 > .XOUT" to=".Y1 > .pin2" />
    <trace schDisplayLabel="" from=".Y1 > .pin1" to=".C1 > .pin1" />
    <trace schDisplayLabel="" from=".Y1 > .pin2" to=".C2 > .pin1" />
    <trace schDisplayLabel="" from=".C1 > .pin2" to="net.GND" />
    <trace schDisplayLabel="" from=".C2 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".U1 > .QSPI_SS" to=".U2 > .CS" />
    <trace schDisplayLabel="" from=".U1 > .QSPI_SD0" to=".U2 > .pin5" />
    <trace schDisplayLabel="" from=".U1 > .QSPI_SD1" to=".U2 > .pin2" />
    <trace schDisplayLabel="" from=".U1 > .QSPI_SD2" to=".U2 > .pin3" />
    <trace schDisplayLabel="" from=".U1 > .QSPI_SD3" to=".U2 > .pin7" />
    <trace schDisplayLabel="" from=".U1 > .QSPI_SCLK" to=".U2 > .CLK" />
    <trace schDisplayLabel="" from=".U2 > .VCC" to="net.V3_3" />
    <trace schDisplayLabel="" from=".U2 > .GND" to="net.GND" />
    <trace schDisplayLabel="" from=".SW1 > .pin1" to=".U2 > .CS" />
    <trace schDisplayLabel="" from=".SW1 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".SW2 > .pin1" to=".U1 > .RUN" />
    <trace schDisplayLabel="" from=".SW2 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".U1 > .GPIO25" to=".R1 > .pin1" />
    <trace schDisplayLabel="" from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace schDisplayLabel="" from=".D1 > .pin2" to="net.GND" />

    <trace schDisplayLabel="" from=".U1 > .GPIO0" to=".J2 > .GPIO0" />
    <trace schDisplayLabel="" from=".U1 > .GPIO1" to=".J2 > .GPIO1" />
    <trace schDisplayLabel="" from=".U1 > .GPIO2" to=".J2 > .GPIO2" />
    <trace schDisplayLabel="" from=".U1 > .GPIO3" to=".J2 > .GPIO3" />
    <trace schDisplayLabel="" from=".U1 > .GPIO4" to=".J2 > .GPIO4" />
    <trace schDisplayLabel="" from=".U1 > .GPIO5" to=".J2 > .GPIO5" />
    <trace schDisplayLabel="" from=".U1 > .GPIO6" to=".J2 > .GPIO6" />
    <trace schDisplayLabel="" from=".U1 > .GPIO7" to=".J2 > .GPIO7" />
    <trace schDisplayLabel="" from=".J2 > .GND" to="net.GND" />
    <trace schDisplayLabel="" from=".J2 > .V3_3" to="net.V3_3" />

    <trace schDisplayLabel="" from=".U1 > .GPIO8" to=".J3 > .GPIO8" />
    <trace schDisplayLabel="" from=".U1 > .GPIO9" to=".J3 > .GPIO9" />
    <trace schDisplayLabel="" from=".U1 > .GPIO10" to=".J3 > .GPIO10" />
    <trace schDisplayLabel="" from=".U1 > .GPIO11" to=".J3 > .GPIO11" />
    <trace schDisplayLabel="" from=".U1 > .GPIO12" to=".J3 > .GPIO12" />
    <trace schDisplayLabel="" from=".U1 > .GPIO13" to=".J3 > .GPIO13" />
    <trace schDisplayLabel="" from=".U1 > .GPIO14" to=".J3 > .GPIO14" />
    <trace schDisplayLabel="" from=".U1 > .GPIO15" to=".J3 > .GPIO15" />
    <trace schDisplayLabel="" from=".J3 > .RUN" to=".U1 > .RUN" />
    <trace schDisplayLabel="" from=".J3 > .VBUS" to="net.VBUS" />
  </board>
)
