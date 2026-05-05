const rp2040PinLabels = {
  pin1: "IOVDD_1",
  pin2: "GP0",
  pin3: "GP1",
  pin4: "GP2",
  pin5: "GP3",
  pin6: "GP4",
  pin7: "GP5",
  pin8: "GP6",
  pin9: "GP7",
  pin10: "IOVDD_2",
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
  pin22: "IOVDD_3",
  pin23: "DVDD_1",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GP16",
  pin28: "GP17",
  pin29: "GP18",
  pin30: "GP19",
  pin31: "GP20",
  pin32: "GP21",
  pin33: "IOVDD_4",
  pin34: "GP22",
  pin35: "GP23",
  pin36: "GP24",
  pin37: "GP25",
  pin38: "GP26_ADC0",
  pin39: "GP27_ADC1",
  pin40: "GP28_ADC2",
  pin41: "GP29_ADC3",
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
  pin56: "QSPI_SS_N",
} as const

const flashPinLabels = {
  pin1: "CS_N",
  pin2: "IO1",
  pin3: "IO2",
  pin4: "GND",
  pin5: "IO0",
  pin6: "CLK",
  pin7: "IO3",
  pin8: "VCC",
} as const

const regulatorPinLabels = {
  pin1: "VIN",
  pin2: "GND",
  pin3: "EN",
  pin4: "NC",
  pin5: "VOUT",
} as const

export default () => (
  <board width="82mm" height="56mm" layers={2} autorouter="auto_jumper">
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56"
      schWidth={2.4}
      pinLabels={rp2040PinLabels}
      supplierPartNumbers={{ jlcpcb: ["C2040"] }}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
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
            "SWCLK",
            "SWDIO",
          ],
          direction: "top-to-bottom",
        },
        topSide: {
          pins: [
            "USB_DM",
            "USB_DP",
            "USB_VDD",
            "XIN",
            "XOUT",
            "RUN",
            "QSPI_SS_N",
            "QSPI_SCLK",
            "QSPI_SD0",
            "QSPI_SD1",
            "QSPI_SD2",
            "QSPI_SD3",
          ],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: [
            "IOVDD_1",
            "IOVDD_2",
            "IOVDD_3",
            "IOVDD_4",
            "IOVDD_5",
            "IOVDD_6",
            "ADC_AVDD",
            "VREG_VIN",
            "VREG_VOUT",
            "DVDD_1",
            "DVDD_2",
            "TESTEN",
          ],
          direction: "left-to-right",
        },
      }}
    />

    <connector
      name="JUSB"
      standard="usb_c"
      manufacturerPartNumber="TYPE-C-31-M-12"
      schWidth={1.55}
      pcbX={0}
      pcbY={-25}
      pcbRotation={0}
      schX={-8}
      schY={4}
      footprint={
        <footprint>
          <hole pcbX="-2.8mm" pcbY="0mm" diameter="0.65mm" />
          <hole pcbX="2.8mm" pcbY="0mm" diameter="0.65mm" />
          <smtpad portHints={["pin17", "GND1"]} pcbX="-3.3mm" pcbY="1.8mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin18", "VBUS1"]} pcbX="-2.55mm" pcbY="1.8mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin20", "CC1"]} pcbX="-1.4mm" pcbY="1.8mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin21", "DM2"]} pcbX="-0.7mm" pcbY="1.8mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin22", "DP1"]} pcbX="0mm" pcbY="1.8mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin23", "DM1"]} pcbX="0.7mm" pcbY="1.8mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin24", "DP2"]} pcbX="1.4mm" pcbY="1.8mm" width="0.35mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin26", "CC2"]} pcbX="2.55mm" pcbY="1.8mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin27", "VBUS2"]} pcbX="3.3mm" pcbY="1.8mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin28", "GND2"]} pcbX="4.05mm" pcbY="1.8mm" width="0.6mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin13", "SHELL1"]} pcbX="-4.4mm" pcbY="-1mm" width="1.5mm" height="2.2mm" shape="rect" />
          <smtpad portHints={["pin14", "SHELL2"]} pcbX="4.4mm" pcbY="-1mm" width="1.5mm" height="2.2mm" shape="rect" />
          <smtpad portHints={["pin15", "SHELL3"]} pcbX="-4.4mm" pcbY="2.8mm" width="1.5mm" height="1.8mm" shape="rect" />
          <smtpad portHints={["pin16", "SHELL4"]} pcbX="4.4mm" pcbY="2.8mm" width="1.5mm" height="1.8mm" shape="rect" />
        </footprint>
      }
    />

    <chip
      name="U2"
      manufacturerPartNumber="W25Q16JVUXIQ"
      footprint="soic8"
      pinLabels={flashPinLabels}
      supplierPartNumbers={{ jlcpcb: ["C2843335"] }}
      pcbX={13}
      pcbY={4}
      schX={7}
      schY={3}
    />

    <chip
      name="U3"
      manufacturerPartNumber="AP2112K-3.3TRG1"
      footprint="sot23-5"
      pinLabels={regulatorPinLabels}
      supplierPartNumbers={{ jlcpcb: ["C51118"] }}
      pcbX={-12}
      pcbY={-9}
      schX={-7}
      schY={-2}
    />

    <crystal
      name="Y1"
      frequency="12MHz"
      loadCapacitance="15pF"
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" width="1.2mm" height="1.6mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" width="1.2mm" height="1.6mm" shape="rect" />
        </footprint>
      }
      supplierPartNumbers={{ jlcpcb: ["C9002"] }}
      pcbX={-10}
      pcbY={3}
      schX={-6.6}
      schY={1.8}
    />

    <pinheader
      name="JLEFT"
      pinCount={12}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow12_female"
      showSilkscreenPinLabels
      schWidth={0.7}
      pinLabels={[
        "GP0",
        "GP1",
        "GP2",
        "GP3",
        "GP4",
        "GP5",
        "GP6",
        "GP7",
        "SWCLK",
        "SWDIO",
        "3V3",
        "GND",
      ]}
      pcbX={-38}
      pcbY={0}
      pcbRotation={90}
      schX={-13}
      schY={0}
    />

    <pinheader
      name="JRIGHT"
      pinCount={12}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow12_female"
      showSilkscreenPinLabels
      schWidth={1.1}
      pinLabels={[
        "GP16",
        "GP17",
        "GP18",
        "GP19",
        "GP20",
        "GP21",
        "GP22",
        "GP23",
        "RUN",
        "VBUS",
        "3V3",
        "GND",
      ]}
      pcbX={38}
      pcbY={0}
      pcbRotation={90}
      schX={13}
      schY={0}
    />

    <pushbutton name="SW_BOOT" footprint="pushbutton_4pin" pcbX={18} pcbY={-9} schX={5} schY={-4} />
    <pushbutton name="SW_RUN" footprint="pushbutton_4pin" pcbX={27} pcbY={-9} schX={9} schY={-4} />

    <resistor name="R_DP" resistance="27" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25100"] }} pcbX={-3} pcbY={-9} schX={-5} schY={5.5} />
    <resistor name="R_DM" resistance="27" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25100"] }} pcbX={3} pcbY={-9} schX={-5} schY={4.7} />
    <resistor name="R_CC1" resistance="5.1k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25905"] }} pcbX={-8} pcbY={-13} schX={-10} schY={2.2} />
    <resistor name="R_CC2" resistance="5.1k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C25905"] }} pcbX={6} pcbY={-13} schX={-10} schY={1.4} />
    <resistor name="R_LED" resistance="1k" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C11702"] }} pcbX={12} pcbY={9} schX={6} schY={-1.5} />
    <led name="D1" footprint="0603" color="green" supplierPartNumbers={{ jlcpcb: ["C72043"] }} pcbX={17} pcbY={9} schX={8} schY={-1.5} />

    <capacitor name="C_VBUS" capacitance="10uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C19702"] }} pcbX={-18} pcbY={-10} schX={-10} schY={-3.3} schOrientation="vertical" />
    <capacitor name="C_3V3" capacitance="10uF" footprint="0603" supplierPartNumbers={{ jlcpcb: ["C19702"] }} pcbX={-18} pcbY={-5} schX={-4.5} schY={-3.4} schOrientation="vertical" />
    <capacitor name="C_U1A" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={-7} pcbY={7} schX={-2.5} schY={-4.6} schOrientation="vertical" />
    <capacitor name="C_U1B" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={-3} pcbY={7} schX={-1} schY={-4.6} schOrientation="vertical" />
    <capacitor name="C_U1C" capacitance="100nF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1525"] }} pcbX={1} pcbY={7} schX={0.5} schY={-4.6} schOrientation="vertical" />
    <capacitor name="C_VREG" capacitance="1uF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C52923"] }} pcbX={5} pcbY={7} schX={2} schY={-4.6} schOrientation="vertical" />
    <capacitor name="C_XIN" capacitance="15pF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1548"] }} pcbX={-14} pcbY={7} schX={-9.5} schY={3.2} schOrientation="vertical" />
    <capacitor name="C_XOUT" capacitance="15pF" footprint="0402" supplierPartNumbers={{ jlcpcb: ["C1548"] }} pcbX={-10} pcbY={-1} schX={-5.4} schY={2.8} schOrientation="vertical" />

    <trace from="JUSB.VBUS1" to="net.VBUS" />
    <trace from="JUSB.VBUS2" to="net.VBUS" />
    <trace from="JUSB.GND1" to="net.GND" />
    <trace from="JUSB.GND2" to="net.GND" />
    <trace from="JUSB.SHELL1" to="net.GND" />
    <trace from="JUSB.SHELL2" to="net.GND" />
    <trace from="JUSB.SHELL3" to="net.GND" />
    <trace from="JUSB.SHELL4" to="net.GND" />
    <trace from="JUSB.DP1" to="R_DP.pin1" />
    <trace from="JUSB.DP2" to="R_DP.pin1" />
    <trace from="R_DP.pin2" to="U1.USB_DP" />
    <trace from="JUSB.DM1" to="R_DM.pin1" />
    <trace from="JUSB.DM2" to="R_DM.pin1" />
    <trace from="R_DM.pin2" to="U1.USB_DM" />
    <trace from="JUSB.CC1" to="R_CC1.pin1" />
    <trace from="JUSB.CC2" to="R_CC2.pin1" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="R_CC2.pin2" to="net.GND" />

    <trace from="U3.VIN" to="net.VBUS" />
    <trace from="U3.EN" to="net.VBUS" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="C_VBUS.pin1" to="net.VBUS" />
    <trace from="C_VBUS.pin2" to="net.GND" />
    <trace from="C_3V3.pin1" to="net.V3_3" />
    <trace from="C_3V3.pin2" to="net.GND" />

    <trace from="U1.IOVDD_1" to="net.V3_3" />
    <trace from="U1.IOVDD_2" to="net.V3_3" />
    <trace from="U1.IOVDD_3" to="net.V3_3" />
    <trace from="U1.IOVDD_4" to="net.V3_3" />
    <trace from="U1.IOVDD_5" to="net.V3_3" />
    <trace from="U1.IOVDD_6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_VIN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.VREG_OUT" />
    <trace from="U1.DVDD_1" to="net.VREG_OUT" />
    <trace from="U1.DVDD_2" to="net.VREG_OUT" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="C_U1A.pin1" to="net.V3_3" />
    <trace from="C_U1A.pin2" to="net.GND" />
    <trace from="C_U1B.pin1" to="net.V3_3" />
    <trace from="C_U1B.pin2" to="net.GND" />
    <trace from="C_U1C.pin1" to="net.V3_3" />
    <trace from="C_U1C.pin2" to="net.GND" />
    <trace from="C_VREG.pin1" to="net.VREG_OUT" />
    <trace from="C_VREG.pin2" to="net.GND" />

    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.CS_N" to="U1.QSPI_SS_N" />
    <trace from="U2.CLK" to="U1.QSPI_SCLK" />
    <trace from="U2.IO0" to="U1.QSPI_SD0" />
    <trace from="U2.IO1" to="U1.QSPI_SD1" />
    <trace from="U2.IO2" to="U1.QSPI_SD2" />
    <trace from="U2.IO3" to="U1.QSPI_SD3" />

    <trace from="Y1.pin1" to="U1.XIN" />
    <trace from="Y1.pin2" to="U1.XOUT" />
    <trace from="C_XIN.pin1" to="U1.XIN" />
    <trace from="C_XIN.pin2" to="net.GND" />
    <trace from="C_XOUT.pin1" to="U1.XOUT" />
    <trace from="C_XOUT.pin2" to="net.GND" />

    <trace from="U1.QSPI_SS_N" to="SW_BOOT.pin1" />
    <trace from="SW_BOOT.pin2" to="net.GND" />
    <trace from="U1.QSPI_SS_N" to="SW_BOOT.pin3" />
    <trace from="SW_BOOT.pin4" to="net.GND" />
    <trace from="U1.RUN" to="SW_RUN.pin1" />
    <trace from="SW_RUN.pin2" to="net.GND" />
    <trace from="U1.RUN" to="SW_RUN.pin3" />
    <trace from="SW_RUN.pin4" to="net.GND" />
    <trace from="U1.GP25" to="R_LED.pin1" />
    <trace from="R_LED.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="net.GND" />

    <trace from="JLEFT.GP0" to="U1.GP0" />
    <trace from="JLEFT.GP1" to="U1.GP1" />
    <trace from="JLEFT.GP2" to="U1.GP2" />
    <trace from="JLEFT.GP3" to="U1.GP3" />
    <trace from="JLEFT.GP4" to="U1.GP4" />
    <trace from="JLEFT.GP5" to="U1.GP5" />
    <trace from="JLEFT.GP6" to="U1.GP6" />
    <trace from="JLEFT.GP7" to="U1.GP7" />
    <trace from="JLEFT.SWCLK" to="U1.SWCLK" />
    <trace from="JLEFT.SWDIO" to="U1.SWDIO" />
    <trace from="JLEFT.3V3" to="net.V3_3" />
    <trace from="JLEFT.GND" to="net.GND" />

    <trace from="JRIGHT.GP16" to="U1.GP16" />
    <trace from="JRIGHT.GP17" to="U1.GP17" />
    <trace from="JRIGHT.GP18" to="U1.GP18" />
    <trace from="JRIGHT.GP19" to="U1.GP19" />
    <trace from="JRIGHT.GP20" to="U1.GP20" />
    <trace from="JRIGHT.GP21" to="U1.GP21" />
    <trace from="JRIGHT.GP22" to="U1.GP22" />
    <trace from="JRIGHT.GP23" to="U1.GP23" />
    <trace from="JRIGHT.RUN" to="U1.RUN" />
    <trace from="JRIGHT.VBUS" to="net.VBUS" />
    <trace from="JRIGHT.3V3" to="net.V3_3" />
    <trace from="JRIGHT.GND" to="net.GND" />
  </board>
)
