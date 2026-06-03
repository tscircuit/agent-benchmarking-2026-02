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
  pin6: "SCLK",
  pin7: "IO3",
  pin8: "VCC",
} as const

export default () => (
  <board width="44mm" height="27mm" layers={2}>
    <schematicsection name="Power" displayName="USB Power" />
    <schematicsection name="MCU" displayName="RP2040 Core" />
    <schematicsection name="IO" displayName="Breakout IO" />

    <connector
      name="JUSB"
      standard="usb_c"
      manufacturerPartNumber="USB-C-16P-SMD"
      pcbX={-18.1}
      pcbY={0}
      pcbRotation={-90}
      schSectionName="Power"
      schX={-8}
      schY={2}
    />

    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56"
      pinLabels={rp2040PinLabels}
      pcbX={-2.5}
      pcbY={0}
      schSectionName="MCU"
      schX={2}
      schY={0}
      schPinArrangement={{
        topSide: {
          pins: ["IOVDD_1", "IOVDD_2", "IOVDD_3", "IOVDD_4", "IOVDD_5", "IOVDD_6", "USB_VDD", "ADC_AVDD"],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: ["DVDD_1", "DVDD_2", "VREG_VIN", "VREG_VOUT", "TESTEN"],
          direction: "left-to-right",
        },
        leftSide: {
          pins: ["USB_DP", "USB_DM", "XIN", "XOUT", "QSPI_SS_N", "QSPI_SCLK", "QSPI_SD0", "QSPI_SD1", "QSPI_SD2", "QSPI_SD3"],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: ["GP0", "GP1", "GP2", "GP3", "GP4", "GP5", "GP6", "GP7", "GP8", "GP9", "GP10", "GP11", "GP12", "GP13", "GP14", "GP15", "GP16", "GP17", "GP18", "GP19", "GP20", "GP21", "GP22", "GP23", "GP24", "GP25", "GP26_ADC0", "GP27_ADC1", "GP28_ADC2", "GP29_ADC3", "RUN", "SWCLK", "SWDIO"],
          direction: "top-to-bottom",
        },
      }}
    />

    <chip
      name="U2"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint="soic8"
      pinLabels={flashPinLabels}
      pcbX={8.5}
      pcbY={-5.6}
      pcbRotation={180}
      schSectionName="MCU"
      schX={-4}
      schY={-4}
    />

    <chip
      name="Y1"
      manufacturerPartNumber="X322512MSB4SI"
      pinLabels={{
        pin1: "XI",
        pin2: "XO",
      }}
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX="-1mm" pcbY="0" width="1.2mm" height="1.4mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX="1mm" pcbY="0" width="1.2mm" height="1.4mm" shape="rect" />
        </footprint>
      }
      pcbX={-7.6}
      pcbY={6.7}
      schSectionName="MCU"
      schX={-4}
      schY={2}
    />

    <chip
      name="U3"
      manufacturerPartNumber="AP2112K-3.3"
      footprint="sot23_5"
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
      pcbX={-10.8}
      pcbY={-6.6}
      pcbRotation={180}
      schSectionName="Power"
      schX={-2}
      schY={2}
    />

    <pinheader
      name="J1"
      pinCount={8}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      showSilkscreenPinLabels
      pinLabels={["GP0", "GP1", "GP2", "GP3", "GP4", "GP5", "3V3", "GND"]}
      pcbX={6}
      pcbY={11.5}
      pcbRotation={0}
      schSectionName="IO"
      schX={9}
      schY={3}
    />
    <pinheader
      name="J2"
      pinCount={8}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow8"
      showSilkscreenPinLabels
      pinLabels={["VBUS", "GND", "RUN", "GP25_LED", "GP26_ADC0", "GP27_ADC1", "SWDIO", "SWCLK"]}
      pcbX={6}
      pcbY={-11.5}
      pcbRotation={180}
      schSectionName="IO"
      schX={9}
      schY={-3}
    />

    <resistor name="R1" resistance="27" footprint="0402" pcbX={-10.7} pcbY={2.9} schSectionName="Power" schX={-5} schY={0.8} />
    <resistor name="R2" resistance="27" footprint="0402" pcbX={-10.7} pcbY={1.3} schSectionName="Power" schX={-5} schY={-0.4} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={-13.5} pcbY={6.6} schSectionName="Power" schX={-9.5} schY={0} />
    <resistor name="R4" resistance="5.1k" footprint="0402" pcbX={-17.4} pcbY={-6.6} schSectionName="Power" schX={-9.5} schY={-1.2} />
    <resistor name="R5" resistance="1k" footprint="0603" pcbX={12.4} pcbY={3.1} schSectionName="IO" schX={6} schY={1} />
    <resistor name="R6" resistance="10k" footprint="0402" pcbX={12.4} pcbY={-0.8} schSectionName="MCU" schX={-5.5} schY={-6} />
    <resistor name="R7" resistance="10k" footprint="0402" pcbX={12.4} pcbY={-3.3} schSectionName="MCU" schX={-6.8} schY={-4} />

    <led name="D1" color="green" footprint="0603" pcbX={16.2} pcbY={3.1} schSectionName="IO" schX={7.5} schY={1} />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={-14.8} pcbY={-7.4} schSectionName="Power" schX={-4.2} schY={3.5} />
    <capacitor name="C2" capacitance="10uF" footprint="0603" pcbX={-6.8} pcbY={-7.4} schSectionName="Power" schX={0} schY={3.5} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={-8.5} pcbY={-2.2} schSectionName="MCU" schX={-0.5} schY={-4.2} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={-8.5} pcbY={0} schSectionName="MCU" schX={0.8} schY={-4.2} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-8.5} pcbY={2.2} schSectionName="MCU" schX={2.1} schY={-4.2} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={3.6} pcbY={-2.2} schSectionName="MCU" schX={3.4} schY={-4.2} />
    <capacitor name="C7" capacitance="1uF" footprint="0402" pcbX={3.6} pcbY={0} schSectionName="MCU" schX={4.7} schY={-4.2} />
    <capacitor name="C8" capacitance="27pF" footprint="0402" pcbX={-11.2} pcbY={6.2} schSectionName="MCU" schX={-5.5} schY={3.5} />
    <capacitor name="C9" capacitance="27pF" footprint="0402" pcbX={-4.1} pcbY={6.2} schSectionName="MCU" schX={-2.5} schY={3.5} />
    <capacitor name="C10" capacitance="100nF" footprint="0402" pcbX={3.6} pcbY={2.2} schSectionName="MCU" schX={6} schY={-4.2} />

    <silkscreentext text="RP2040 BREAKOUT" pcbX={6} pcbY={0} fontSize={1.2} />
    <silkscreentext text="USB" pcbX={-18.1} pcbY={5.8} fontSize={0.8} />
    <silkscreentext text="LED" pcbX={16.2} pcbY={5.2} fontSize={0.8} />

    <trace from="JUSB.VBUS1" to="JUSB.VBUS2" pcbStraightLine />
    <trace from="JUSB.GND1" to="JUSB.GND2" pcbStraightLine />
    <trace from="JUSB.CC1" to="R3.pin1" />
    <trace from="JUSB.CC2" to="R4.pin1" />
    <trace from="R3.pin2" to="JUSB.GND1" pcbStraightLine />
    <trace from="R4.pin2" to="JUSB.GND1" pcbStraightLine />
    <trace from="JUSB.DP1" to="R1.pin1" width="0.18mm" />
    <trace from="JUSB.DP2" to="R1.pin1" width="0.18mm" />
    <trace from="R1.pin2" to="U1.USB_DP" width="0.18mm" />
    <trace from="JUSB.DM1" to="R2.pin1" width="0.18mm" />
    <trace from="JUSB.DM2" to="R2.pin1" width="0.18mm" />
    <trace from="R2.pin2" to="U1.USB_DM" width="0.18mm" />

    <trace from="JUSB.VBUS1" to="U3.VIN" pcbStraightLine />
    <trace from="U3.VIN" to="U3.EN" pcbStraightLine />
    <trace from="U3.VIN" to="C1.pin1" pcbStraightLine />
    <trace from="C1.pin1" to="J2.VBUS" pcbStraightLine />
    <trace from="U3.GND" to="JUSB.GND1" pcbStraightLine />
    <trace from="U3.GND" to="C1.pin2" pcbStraightLine />
    <trace from="C1.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="U3.VOUT" to="C2.pin1" pcbStraightLine />
    <trace from="C2.pin1" to="U1.IOVDD_1" pcbStraightLine />
    <trace from="U1.IOVDD_1" to="U1.IOVDD_2" pcbStraightLine />
    <trace from="U1.IOVDD_2" to="U1.IOVDD_3" pcbStraightLine />
    <trace from="U1.IOVDD_3" to="U1.IOVDD_4" pcbStraightLine />
    <trace from="U1.IOVDD_4" to="U1.IOVDD_5" pcbStraightLine />
    <trace from="U1.IOVDD_5" to="U1.IOVDD_6" pcbStraightLine />
    <trace from="U1.IOVDD_6" to="U1.USB_VDD" pcbStraightLine />
    <trace from="U1.USB_VDD" to="U1.ADC_AVDD" pcbStraightLine />
    <trace from="U1.ADC_AVDD" to="U1.VREG_VIN" pcbStraightLine />
    <trace from="U1.TESTEN" to="C2.pin2" pcbStraightLine />
    <trace from="U1.VREG_VOUT" to="C7.pin1" />
    <trace from="C7.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="U1.DVDD_1" to="C10.pin1" />
    <trace from="U1.DVDD_2" to="C10.pin1" />
    <trace from="C10.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="C3.pin1" to="C2.pin1" pcbStraightLine />
    <trace from="C3.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="C4.pin1" to="C2.pin1" pcbStraightLine />
    <trace from="C4.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="C5.pin1" to="C2.pin1" pcbStraightLine />
    <trace from="C5.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="C6.pin1" to="C2.pin1" pcbStraightLine />
    <trace from="C6.pin2" to="C2.pin2" pcbStraightLine />

    <trace from="U1.XIN" to="Y1.XI" />
    <trace from="U1.XOUT" to="Y1.XO" />
    <trace from="Y1.XI" to="C8.pin1" />
    <trace from="Y1.XO" to="C9.pin1" />
    <trace from="C8.pin2" to="C2.pin2" pcbStraightLine />
    <trace from="C9.pin2" to="C2.pin2" pcbStraightLine />

    <trace from="U1.QSPI_SS_N" to="U2.CS_N" />
    <trace from="U1.QSPI_SCLK" to="U2.SCLK" />
    <trace from="U1.QSPI_SD0" to="U2.IO0" />
    <trace from="U1.QSPI_SD1" to="U2.IO1" />
    <trace from="U1.QSPI_SD2" to="U2.IO2" />
    <trace from="U1.QSPI_SD3" to="U2.IO3" />
    <trace from="U2.VCC" to="C2.pin1" pcbStraightLine />
    <trace from="U2.GND" to="C2.pin2" pcbStraightLine />
    <trace from="U2.CS_N" to="R7.pin1" />
    <trace from="R7.pin2" to="C2.pin1" pcbStraightLine />

    <trace from="U1.RUN" to="R6.pin1" />
    <trace from="R6.pin2" to="C2.pin1" pcbStraightLine />

    <trace from="U1.GP25" to="R5.pin1" />
    <trace from="R5.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="C2.pin2" pcbStraightLine />

    <trace from="J1.GP0" to="U1.GP0" />
    <trace from="J1.GP1" to="U1.GP1" />
    <trace from="J1.GP2" to="U1.GP2" />
    <trace from="J1.GP3" to="U1.GP3" />
    <trace from="J1.GP4" to="U1.GP4" />
    <trace from="J1.GP5" to="U1.GP5" />
    <trace from="J1.3V3" to="C2.pin1" pcbStraightLine />
    <trace from="J1.GND" to="C2.pin2" pcbStraightLine />

    <trace from="J2.GND" to="C2.pin2" pcbStraightLine />
    <trace from="J2.RUN" to="U1.RUN" />
    <trace from="J2.GP25_LED" to="U1.GP25" />
    <trace from="J2.GP26_ADC0" to="U1.GP26_ADC0" />
    <trace from="J2.GP27_ADC1" to="U1.GP27_ADC1" />
    <trace from="J2.SWDIO" to="U1.SWDIO" />
    <trace from="J2.SWCLK" to="U1.SWCLK" />

  </board>
)
