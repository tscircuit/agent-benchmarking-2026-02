const rp2040PinLabels = {
  pin1: "IOVDD1",
  pin2: "GP0",
  pin3: "GP1",
  pin4: "GP2",
  pin5: "GP3",
  pin6: "GP4",
  pin7: "GP5",
  pin8: "GP6",
  pin9: "GP7",
  pin10: "IOVDD2",
  pin11: "GP8",
  pin12: "GP9",
  pin13: "GP10",
  pin14: "GP11",
  pin15: "GP12",
  pin16: "GP13",
  pin17: "GP14",
  pin18: "GP15",
  pin19: "TESTEN",
  pin20: "XIN",
  pin21: "XOUT",
  pin22: "IOVDD3",
  pin23: "DVDD1",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GP16",
  pin28: "GP17",
  pin29: "GP18",
  pin30: "GP19",
  pin31: "GP20",
  pin32: "GP21",
  pin33: "IOVDD4",
  pin34: "GP22",
  pin35: "GP23",
  pin36: "GP24",
  pin37: "GP25",
  pin38: "GP26_ADC0",
  pin39: "GP27_ADC1",
  pin40: "GP28_ADC2",
  pin41: "GP29_ADC3",
  pin42: "IOVDD5",
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: "IOVDD6",
  pin50: "DVDD2",
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_SS_N",
} as const

const iovddPins = ["IOVDD1", "IOVDD2", "IOVDD3", "IOVDD4", "IOVDD5", "IOVDD6"]
const dvddPins = ["DVDD1", "DVDD2"]

export default () => (
  <board
    width="60mm"
    height="50mm"
    layers={2}
  >
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56_w7mm_h7mm_p0.4mm_pw0.2mm_pl0.4mm"
      pinLabels={rp2040PinLabels}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schWidth={2.43}
      schPinArrangement={{
        leftSide: {
          pins: [
            "GP0",
            "GP1",
            "GP2",
            "GP3",
            "GP4",
            "GP5",
            "GP6",
            "GP7",
            "GP8",
            "GP9",
            "GP10",
            "GP11",
            "GP12",
            "GP13",
            "GP14",
            "GP15",
          ],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [
            "GP16",
            "GP17",
            "GP18",
            "GP19",
            "GP20",
            "GP21",
            "GP22",
            "GP23",
            "GP24",
            "GP25",
            "GP26_ADC0",
            "GP27_ADC1",
            "GP28_ADC2",
            "GP29_ADC3",
            "USB_DM",
            "USB_DP",
          ],
          direction: "top-to-bottom",
        },
        topSide: {
          pins: [
            "IOVDD1",
            "IOVDD2",
            "IOVDD3",
            "IOVDD4",
            "IOVDD5",
            "IOVDD6",
            "DVDD1",
            "DVDD2",
            "ADC_AVDD",
            "USB_VDD",
            "VREG_VIN",
            "VREG_VOUT",
          ],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: [
            "XIN",
            "XOUT",
            "RUN",
            "TESTEN",
            "SWCLK",
            "SWDIO",
            "QSPI_SD0",
            "QSPI_SD1",
            "QSPI_SD2",
            "QSPI_SD3",
            "QSPI_SCLK",
            "QSPI_SS_N",
          ],
          direction: "left-to-right",
        },
      }}
    />

    <connector
      name="USB1"
      manufacturerPartNumber="Micro-USB-B"
      pinLabels={{
        pin1: "VBUS",
        pin2: "D_NEG",
        pin3: "D_POS",
        pin4: "ID",
        pin5: "GND",
        pin6: "SHIELD_L",
        pin7: "SHIELD_R",
      }}
      pcbX={0}
      pcbY={-22}
      pcbRotation={0}
      schX={-8}
      schY={0}
      schHeight={0.8}
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1.3mm" pcbY="2.2mm" width="0.45mm" height="1.35mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="-0.65mm" pcbY="2.2mm" width="0.45mm" height="1.35mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX="0mm" pcbY="2.2mm" width="0.45mm" height="1.35mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX="0.65mm" pcbY="2.2mm" width="0.45mm" height="1.35mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX="1.3mm" pcbY="2.2mm" width="0.45mm" height="1.35mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX="-3.15mm" pcbY="-0.65mm" width="1.5mm" height="2.1mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX="3.15mm" pcbY="-0.65mm" width="1.5mm" height="2.1mm" shape="rect" />
        </footprint>
      }
    />

    <chip
      name="U2"
      manufacturerPartNumber="AMS1117-3.3"
      supplierPartNumbers={{ jlcpcb: ["C6186"] }}
      footprint="sot223"
      pinLabels={{ pin1: "GND", pin2: "VOUT", pin3: "VIN" }}
      pcbX={-17}
      pcbY={-15}
      schX={-4}
      schY={3}
    />

    <chip
      name="U3"
      manufacturerPartNumber="W25Q16JVSSIQ"
      supplierPartNumbers={{ jlcpcb: ["C82317"] }}
      footprint="soic8"
      pinLabels={{
        pin1: "CS",
        pin2: "DO_IO1",
        pin3: "WP_IO2",
        pin4: "GND",
        pin5: "DI_IO0",
        pin6: "CLK",
        pin7: "HOLD_IO3",
        pin8: "VCC",
      }}
      pcbX={8}
      pcbY={-10}
      schX={4}
      schY={-3}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="20pF"
      manufacturerPartNumber="X322512MSB4SI"
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      footprint="hc49"
      pcbX={-8}
      pcbY={8}
      schX={0}
      schY={-4}
    />

    <pushbutton name="SW_BOOT" footprint="pushbutton" pcbX={10} pcbY={15} schX={5} schY={2.5} />
    <pushbutton name="SW_RUN" footprint="pushbutton" pcbX={18} pcbY={15} schX={5} schY={4} />

    <led
      name="D1"
      color="green"
      supplierPartNumbers={{ jlcpcb: ["C72043"] }}
      footprint="0603"
      pcbX={18}
      pcbY={-9}
      schX={6.5}
      schY={-1}
    />
    <resistor
      name="R_LED"
      resistance="1k"
      supplierPartNumbers={{ jlcpcb: ["C21190"] }}
      footprint="0603"
      pcbX={14}
      pcbY={-9}
      schX={5}
      schY={-1}
    />

    <resistor name="R_BOOT" resistance="10k" supplierPartNumbers={{ jlcpcb: ["C25804"] }} footprint="0603" pcbX={10} pcbY={9.5} schX={3} schY={2.5} />
    <resistor name="R_RUN" resistance="10k" supplierPartNumbers={{ jlcpcb: ["C25804"] }} footprint="0603" pcbX={18} pcbY={9.5} schX={3} schY={4} />
    <resistor name="R_TESTEN" resistance="1k" supplierPartNumbers={{ jlcpcb: ["C21190"] }} footprint="0603" pcbX={1} pcbY={10.5} schX={-1} schY={4} />
    <resistor name="R_DP" resistance="27" supplierPartNumbers={{ jlcpcb: ["C25102"] }} footprint="0603" pcbX={-2} pcbY="-15mm" schX={-4} schY={-1} />
    <resistor name="R_DM" resistance="27" supplierPartNumbers={{ jlcpcb: ["C25102"] }} footprint="0603" pcbX={2} pcbY="-15mm" schX={-4} schY={-2} />

    <capacitor name="C_VBUS" capacitance="10uF" supplierPartNumbers={{ jlcpcb: ["C19702"] }} footprint="0603" pcbX={-20} pcbY={-22} schX={-6} schY={3} schOrientation="vertical" />
    <capacitor name="C_3V3" capacitance="10uF" supplierPartNumbers={{ jlcpcb: ["C19702"] }} footprint="0603" pcbX={-10} pcbY={-15} schX={-2} schY={3} schOrientation="vertical" />
    <capacitor name="C_ADC" capacitance="100nF" supplierPartNumbers={{ jlcpcb: ["C14663"] }} footprint="0402" pcbX={6.5} pcbY={5} schX={1} schY={3} schOrientation="vertical" />
    <capacitor name="C_USB" capacitance="1uF" supplierPartNumbers={{ jlcpcb: ["C15849"] }} footprint="0402" pcbX={-6} pcbY={4} schX={0.7} schY={4.2} schOrientation="vertical" />
    <capacitor name="C_VREG" capacitance="1uF" supplierPartNumbers={{ jlcpcb: ["C15849"] }} footprint="0402" pcbX={3.5} pcbY={5.5} schX={2.1} schY={4.2} schOrientation="vertical" />
    <capacitor name="C_XIN" capacitance="18pF" supplierPartNumbers={{ jlcpcb: ["C1548"] }} footprint="0402" pcbX={-11} pcbY={12.5} schX={-2} schY={-5} schOrientation="vertical" />
    <capacitor name="C_XOUT" capacitance="18pF" supplierPartNumbers={{ jlcpcb: ["C1548"] }} footprint="0402" pcbX={-5} pcbY={12.5} schX={2} schY={-5} schOrientation="vertical" />

    {iovddPins.map((pinName) => (
      <trace key={`iovdd-${pinName}`} from={`U1.${pinName}`} to="net.V3_3" />
    ))}
    {dvddPins.map((pinName) => (
      <trace key={`dvdd-${pinName}`} from={`U1.${pinName}`} to="net.V1_1" />
    ))}

    <trace from="USB1.VBUS" to="net.VBUS" />
    <trace from="USB1.GND" to="net.GND" />
    <trace from="USB1.SHIELD_L" to="net.GND" />
    <trace from="USB1.SHIELD_R" to="net.GND" />
    <trace from="USB1.D_POS" to="R_DP.pin1" />
    <trace from="R_DP.pin2" to="U1.USB_DP" />
    <trace from="USB1.D_NEG" to="R_DM.pin1" />
    <trace from="R_DM.pin2" to="U1.USB_DM" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.VOUT" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="C_VBUS.pin1" to="net.VBUS" />
    <trace from="C_VBUS.pin2" to="net.GND" />
    <trace from="C_3V3.pin1" to="net.V3_3" />
    <trace from="C_3V3.pin2" to="net.GND" />

    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.VREG_VIN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="C_ADC.pin1" to="U1.ADC_AVDD" />
    <trace from="C_ADC.pin2" to="net.GND" />
    <trace from="C_USB.pin1" to="U1.USB_VDD" />
    <trace from="C_USB.pin2" to="net.GND" />
    <trace from="C_VREG.pin1" to="U1.VREG_VOUT" />
    <trace from="C_VREG.pin2" to="net.GND" />

    <trace from="Y1.pin1" to="U1.XIN" />
    <trace from="Y1.pin2" to="U1.XOUT" />
    <trace from="C_XIN.pin1" to="U1.XIN" />
    <trace from="C_XIN.pin2" to="net.GND" />
    <trace from="C_XOUT.pin1" to="U1.XOUT" />
    <trace from="C_XOUT.pin2" to="net.GND" />

    <trace from="U3.VCC" to="net.V3_3" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.CS" to="U1.QSPI_SS_N" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.DI_IO0" to="U1.QSPI_SD0" />
    <trace from="U3.DO_IO1" to="U1.QSPI_SD1" />
    <trace from="U3.WP_IO2" to="U1.QSPI_SD2" />
    <trace from="U3.HOLD_IO3" to="U1.QSPI_SD3" />

    <trace from="U1.GP25" to="R_LED.pin1" />
    <trace from="R_LED.pin2" to="D1.anode" />
    <trace from="D1.cathode" to="net.GND" />

    <trace from="U1.QSPI_SS_N" to="R_BOOT.pin1" />
    <trace from="R_BOOT.pin2" to="net.V3_3" />
    <trace from="SW_BOOT.pin1" to="U1.QSPI_SS_N" />
    <trace from="SW_BOOT.pin2" to="net.GND" />
    <trace from="U1.RUN" to="R_RUN.pin1" />
    <trace from="R_RUN.pin2" to="net.V3_3" />
    <trace from="SW_RUN.pin1" to="U1.RUN" />
    <trace from="SW_RUN.pin2" to="net.GND" />
    <trace from="U1.TESTEN" to="R_TESTEN.pin1" />
    <trace from="R_TESTEN.pin2" to="net.GND" />

    <pinheader
      name="J_GPIO_L"
      pinCount={8}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      pinLabels={["V3_3", "GND", "GP0", "GP1", "GP2", "GP3", "GP4", "GP5"]}
      pcbX={-26}
      pcbY={0}
      pcbRotation={90}
      schX={-7}
      schY={-5}
      schWidth={0.58}
    />
    <pinheader
      name="J_GPIO_R"
      pinCount={8}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      pinLabels={["GP16", "GP17", "GP18", "GP19", "GP20", "GP21", "GP22", "GP23"]}
      pcbX={26}
      pcbY={0}
      pcbRotation={90}
      schX={7}
      schY={-5}
      schWidth={1.05}
    />
    <pinheader
      name="J_SWD"
      pinCount={4}
      gender="male"
      pitch="2.54mm"
      footprint="pinrow4"
      pinLabels={["V3_3", "SWDIO", "SWCLK", "GND"]}
      pcbX={0}
      pcbY={21.5}
      schX={0}
      schY={5}
      schWidth={0.67}
    />

    {["GP0", "GP1", "GP2", "GP3", "GP4", "GP5"].map((pinName) => (
      <trace key={`left-header-${pinName}`} from={`U1.${pinName}`} to={`J_GPIO_L.${pinName}`} />
    ))}
    <trace from="J_GPIO_L.GND" to="net.GND" />
    <trace from="J_GPIO_L.V3_3" to="net.V3_3" />

    {["GP16", "GP17", "GP18", "GP19", "GP20", "GP21", "GP22", "GP23"].map((pinName) => (
      <trace key={`right-header-${pinName}`} from={`U1.${pinName}`} to={`J_GPIO_R.${pinName}`} />
    ))}

    <trace from="J_SWD.V3_3" to="net.V3_3" />
    <trace from="J_SWD.SWDIO" to="U1.SWDIO" />
    <trace from="J_SWD.SWCLK" to="U1.SWCLK" />
    <trace from="J_SWD.GND" to="net.GND" />

    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.2mm" />
    <copperpour connectsTo="net.V3_3" layer="top" clearance="0.2mm" />

    <silkscreentext text="RP2040 USB Breakout" pcbX={0} pcbY={23} fontSize={1.2} />
  </board>
)
