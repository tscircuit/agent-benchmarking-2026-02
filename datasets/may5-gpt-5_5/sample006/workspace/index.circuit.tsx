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
  pin10: "IOVDD_10",
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
  pin22: "IOVDD_22",
  pin23: "DVDD_23",
  pin24: "SWCLK",
  pin25: "SWDIO",
  pin26: "RUN",
  pin27: "GP16",
  pin28: "GP17",
  pin29: "GP18",
  pin30: "GP19",
  pin31: "GP20",
  pin32: "GP21",
  pin33: "IOVDD_33",
  pin34: "GP22",
  pin35: "GP23",
  pin36: "GP24",
  pin37: "GP25",
  pin38: "GP26_ADC0",
  pin39: "GP27_ADC1",
  pin40: "GP28_ADC2",
  pin41: "GP29_ADC3",
  pin42: "IOVDD_42",
  pin43: "ADC_AVDD",
  pin44: "VREG_VIN",
  pin45: "VREG_VOUT",
  pin46: "USB_DM",
  pin47: "USB_DP",
  pin48: "USB_VDD",
  pin49: "IOVDD_49",
  pin50: "DVDD_50",
  pin51: "QSPI_SD3",
  pin52: "QSPI_SCLK",
  pin53: "QSPI_SD0",
  pin54: "QSPI_SD2",
  pin55: "QSPI_SD1",
  pin56: "QSPI_SS_N",
  pin57: "GND_PAD",
} as const

const leftHeaderLabels = [
  "VBUS",
  "GND",
  "3V3",
  "GP0",
  "GP1",
  "GP2",
  "GP3",
  "GP4",
] as const

const rightHeaderLabels = [
  "GP16",
  "GP17",
  "GP19",
  "GP20",
  "GP21",
  "GP25_LED",
  "GND",
] as const

const qfn56Pads = Array.from({ length: 56 }, (_, index) => {
  const pin = index + 1
  const sideIndex = index % 14
  const offset = (sideIndex - 6.5) * 0.4

  if (pin <= 14) {
    return { pin, x: -3.65, y: 2.6 - offset, w: 0.75, h: 0.23, rot: 0 }
  }
  if (pin <= 28) {
    return { pin, x: offset, y: -3.65, w: 0.23, h: 0.75, rot: 0 }
  }
  if (pin <= 42) {
    return { pin, x: 3.65, y: -2.6 + offset, w: 0.75, h: 0.23, rot: 0 }
  }
  return { pin, x: -offset, y: 3.65, w: 0.23, h: 0.75, rot: 0 }
})

const Qfn56Footprint = () => (
  <footprint>
    {qfn56Pads.map((pad) => (
      <smtpad
        shape="rect"
        portHints={[`pin${pad.pin}`]}
        pcbX={pad.x}
        pcbY={pad.y}
        width={pad.w}
        height={pad.h}
      />
    ))}
    <smtpad
      shape="rect"
      portHints={["pin57", "GND_PAD"]}
      pcbX={0}
      pcbY={0}
      width={4.15}
      height={4.15}
    />
  </footprint>
)

const SmallCrystalFootprint = () => (
  <footprint>
    <smtpad
      shape="rect"
      portHints={["pin1"]}
      pcbX="-0.9mm"
      pcbY="0mm"
      width="1mm"
      height="1.2mm"
    />
    <smtpad
      shape="rect"
      portHints={["pin2"]}
      pcbX="0.9mm"
      pcbY="0mm"
      width="1mm"
      height="1.2mm"
    />
  </footprint>
)

const UsbCFootprint = () => (
  <footprint insertionDirection="from_left">
    <smtpad shape="rect" portHints={["pin1", "VBUS"]} pcbX="-2.5mm" pcbY="1.6mm" width="0.7mm" height="2mm" />
    <smtpad shape="rect" portHints={["pin2", "GND"]} pcbX="2.5mm" pcbY="1.6mm" width="0.7mm" height="2mm" />
    <smtpad shape="rect" portHints={["pin3", "DP"]} pcbX="0.45mm" pcbY="1.6mm" width="0.35mm" height="1.8mm" />
    <smtpad shape="rect" portHints={["pin4", "DM"]} pcbX="-0.45mm" pcbY="1.6mm" width="0.35mm" height="1.8mm" />
    <smtpad shape="rect" portHints={["pin5"]} pcbX="-1.25mm" pcbY="1.6mm" width="0.35mm" height="1.8mm" />
    <smtpad shape="rect" portHints={["pin6"]} pcbX="1.25mm" pcbY="1.6mm" width="0.35mm" height="1.8mm" />
    <smtpad shape="rect" portHints={["pin7", "SHIELD1"]} pcbX="-4.2mm" pcbY="-1.3mm" width="1.4mm" height="2.4mm" />
    <smtpad shape="rect" portHints={["pin8", "SHIELD2"]} pcbX="4.2mm" pcbY="-1.3mm" width="1.4mm" height="2.4mm" />
  </footprint>
)


export default () => (
  <board width="58mm" height="44mm" layers={4} borderRadius="1mm">
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint={<Qfn56Footprint />}
      pinLabels={rp2040PinLabels}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schWidth="2mm"
      schHeight="4.5mm"
      schPinArrangement={{
        leftSide: {
          pins: [
            "USB_DP",
            "USB_DM",
            "XIN",
            "XOUT",
            "RUN",
            "SWDIO",
            "SWCLK",
          ],
          direction: "top-to-bottom",
        },
        rightSide: {
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
            "GP16",
            "GP17",
            "GP18",
            "GP19",
            "GP20",
            "GP21",
            "GP22",
            "GP25",
          ],
          direction: "top-to-bottom",
        },
        topSide: {
          pins: [
            "IOVDD_1",
            "IOVDD_10",
            "IOVDD_22",
            "IOVDD_33",
            "IOVDD_42",
            "IOVDD_49",
            "USB_VDD",
            "ADC_AVDD",
            "VREG_VIN",
          ],
          direction: "left-to-right",
        },
        bottomSide: {
          pins: ["DVDD_23", "DVDD_50", "VREG_VOUT", "TESTEN", "GND_PAD"],
          direction: "left-to-right",
        },
      }}
      pinAttributes={{
        IOVDD_1: { requiresPower: true },
        IOVDD_10: { requiresPower: true },
        IOVDD_22: { requiresPower: true },
        IOVDD_33: { requiresPower: true },
        IOVDD_42: { requiresPower: true },
        IOVDD_49: { requiresPower: true },
        USB_VDD: { requiresPower: true },
        GND_PAD: { mustBeConnected: true },
      }}
    />

    <connector
      name="JUSB"
      manufacturerPartNumber="HRO-TYPE-C-31-M-12"
      footprint={<UsbCFootprint />}
      pinLabels={{
        pin1: "VBUS",
        pin2: "GND",
        pin3: "DP",
        pin4: "DM",
        pin5: "CC1",
        pin6: "CC2",
        pin7: "SHIELD1",
        pin8: "SHIELD2",
      }}
      pcbX="-24mm"
      pcbY="0mm"
      pcbRotation={0}
      schX="-7"
      schY="3"
      schWidth="1.575mm"
    />

    <chip
      name="U2"
      manufacturerPartNumber="XC6206P332MR"
      footprint="sot23_5_w1.92mm_h2.74mm_p0.95mm_pl0.8mm_pw0.764mm"
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
      pcbX="-22"
      pcbY="-13"
      schX="-5"
      schY="6"
      schHeight="0.6mm"
    />

    <chip
      name="U3"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint="soic8_w5.3mm_p1.27mm_pw0.6mm_pl1mm"
      pinLabels={{
        pin1: "CS",
        pin2: "IO1",
        pin3: "IO2",
        pin4: "GND",
        pin5: "IO0",
        pin6: "CLK",
        pin7: "IO3",
        pin8: "VCC",
      }}
      pcbX="12"
      pcbY="7"
      schX="7"
      schY="0"
    />

    <chip
      name="Y1"
      manufacturerPartNumber="X322512MSB4SI"
      footprint={<SmallCrystalFootprint />}
      pinLabels={{
        pin1: "XIN",
        pin2: "XOUT",
      }}
      pcbX="-8"
      pcbY="7"
      schX="-5"
      schY="-4"
    />

    <resistor
      name="RCC1"
      resistance="5.1k"
      footprint="0402"
      pcbX="-22"
      pcbY="-6"
      schX="-6"
      schY="1.2"
    />
    <resistor
      name="RLED"
      resistance="1k"
      footprint="0402"
      pcbX="9"
      pcbY="-7"
      schX="5.5"
      schY="-4"
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX="13"
      pcbY="-7"
      schX="6.4"
      schY="-4.8"
    />

    <pushbutton
      name="SW_BOOT"
      footprint="pushbutton_4_pin_smd_6mm"
      pinLabels={{ pin1: "A", pin2: "A2", pin3: "B", pin4: "B2" }}
      noConnect={["A2", "B2"]}
      pcbX="13"
      pcbY="-14"
      schX="7.8"
      schY="-5.4"
    />
    <pushbutton
      name="SW_RESET"
      footprint="pushbutton_4_pin_smd_6mm"
      pinLabels={{ pin1: "A", pin2: "A2", pin3: "B", pin4: "B2" }}
      noConnect={["A2", "B2"]}
      pcbX="5"
      pcbY="-14"
      schX="-2"
      schY="5.8"
    />

    <pinheader
      name="J1"
      pinCount={leftHeaderLabels.length}
      pitch="2.54mm"
      gender="female"
      pinLabels={[...leftHeaderLabels]}
      showSilkscreenPinLabels
      pcbX="-14"
      pcbY="0"
      pcbRotation={90}
      schX="-8"
      schY="-3"
      schWidth="0.58mm"
    />
    <pinheader
      name="J2"
      pinCount={rightHeaderLabels.length}
      pitch="2.54mm"
      gender="female"
      pinLabels={[...rightHeaderLabels]}
      showSilkscreenPinLabels
      pcbX="24"
      pcbY="0"
      pcbRotation={90}
      schX="8"
      schY="-3"
      schWidth="0.96mm"
    />

    <pinheader
      name="JSWD"
      pinCount={4}
      pitch="2.54mm"
      gender="male"
      pinLabels={["3V3", "SWDIO", "SWCLK", "GND"]}
      showSilkscreenPinLabels
      pcbX="-1"
      pcbY="17"
      schX="0"
      schY="6"
      schWidth="0.675mm"
    />

    {[
      { name: "CIN", capacitance: "10uF", pcbX: -22, pcbY: -17, schX: -5, schY: 7.3 },
      { name: "C3V3", capacitance: "10uF", pcbX: -18, pcbY: -17, schX: -3.4, schY: 7.3 },
      { name: "C5", capacitance: "1uF", pcbX: 6, pcbY: 3.6, schX: 2.5, schY: -2 },
      { name: "CUSB", capacitance: "1uF", pcbX: -4, pcbY: 8.8, schX: 4, schY: -2 },
      { name: "CX1", capacitance: "15pF", pcbX: -11, pcbY: 5, schX: -6.5, schY: -5.2 },
      { name: "CX2", capacitance: "15pF", pcbX: -11, pcbY: 9, schX: -4.8, schY: -5.2 },
    ].map(({ name, capacitance, pcbX, pcbY, schX, schY }) => (
      <capacitor
        name={name}
        capacitance={capacitance}
        footprint="0402"
        pcbX={pcbX}
        pcbY={pcbY}
        schX={schX}
        schY={schY}
        schOrientation="vertical"
      />
    ))}

    <testpoint name="TP_VBUS" pcbX="-24" pcbY="15" schX="-7" schY="7" />
    <testpoint name="TP_3V3" pcbX="-20" pcbY="15" schX="-6" schY="7" />
    <testpoint name="TP_GND" pcbX="-16" pcbY="15" schX="-5.4" schY="6.6" />

    <silkscreentext text="RP2040 BREAKOUT" pcbX="1" pcbY="20" fontSize="1.2mm" />
    <silkscreentext text="BOOT" pcbX="13" pcbY="-20" fontSize="0.9mm" />
    <silkscreentext text="RESET" pcbX="5" pcbY="-20" fontSize="0.9mm" />

    <trace from="JUSB.VBUS" to="net.VBUS" width="0.35mm" />
    <trace from="JUSB.GND" to="net.GND" width="0.35mm" />
    <trace from="JUSB.SHIELD1" to="net.GND" width="0.35mm" />
    <trace from="JUSB.SHIELD2" to="net.GND" width="0.35mm" />
    <trace from="JUSB.DP" to="U1.USB_DP" width="0.16mm" />
    <trace from="JUSB.DM" to="U1.USB_DM" width="0.16mm" />
    <trace from="JUSB.pin5" to="RCC1.pin1" />
    <trace from="RCC1.pin2" to="net.GND" />

    <trace from="U2.VIN" to="net.VBUS" width="0.35mm" />
    <trace from="U2.EN" to="net.VBUS" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.VOUT" to="net.V3V3" width="0.35mm" />

    <trace from="U1.IOVDD_1" to="net.V3V3" />
    <trace from="U1.IOVDD_10" to="net.V3V3" />
    <trace from="U1.IOVDD_22" to="net.V3V3" />
    <trace from="U1.IOVDD_33" to="net.V3V3" />
    <trace from="U1.IOVDD_42" to="net.V3V3" />
    <trace from="U1.IOVDD_49" to="net.V3V3" />
    <trace from="U1.USB_VDD" to="net.V3V3" />
    <trace from="U1.VREG_VOUT" to="net.V1V1" />
    <trace from="U1.DVDD_23" to="net.V1V1" />
    <trace from="U1.DVDD_50" to="net.V1V1" />
    <trace from="U1.GND_PAD" to="net.GND" width="0.35mm" />
    <trace from="U1.TESTEN" to="net.GND" />

    <trace from="Y1.pin1" to="U1.XIN" />
    <trace from="Y1.pin2" to="U1.XOUT" />
    <trace from="CX1.pin1" to="U1.XIN" />
    <trace from="CX1.pin2" to="net.GND" />
    <trace from="CX2.pin1" to="U1.XOUT" />
    <trace from="CX2.pin2" to="net.GND" />

    <trace from="U3.CS" to="U1.QSPI_SS_N" />
    <trace from="U3.IO1" to="U1.QSPI_SD1" />
    <trace from="U3.IO2" to="U1.QSPI_SD2" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.IO0" to="U1.QSPI_SD0" />
    <trace from="U3.CLK" to="U1.QSPI_SCLK" />
    <trace from="U3.IO3" to="U1.QSPI_SD3" />
    <trace from="U3.VCC" to="net.V3V3" />

    <trace from="U1.GP25" to="RLED.pin1" />
    <trace from="RLED.pin2" to="D1.pin1" />
    <trace from="D1.cathode" to="net.GND" />

    <trace from="SW_BOOT.A" to="U3.CS" />
    <trace from="SW_BOOT.B" to="net.GND" />
    <trace from="SW_RESET.A" to="U1.RUN" />
    <trace from="SW_RESET.B" to="net.GND" />

    <trace from="CIN.pin1" to="net.VBUS" />
    <trace from="CIN.pin2" to="net.GND" />
    <trace from="C3V3.pin1" to="net.V3V3" />
    <trace from="C3V3.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V1V1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="CUSB.pin1" to="net.V3V3" />
    <trace from="CUSB.pin2" to="net.GND" />

    <trace from="TP_VBUS.pin1" to="net.VBUS" />
    <trace from="TP_3V3.pin1" to="net.V3V3" />
    <trace from="TP_GND.pin1" to="net.GND" />

    <trace from="J1.VBUS" to="net.VBUS" />
    <trace from="J1.GND" to="net.GND" />
    <trace from="J1.3V3" to="net.V3V3" />
    <trace from="J2.GND" to="net.GND" />
    <trace from="JSWD.3V3" to="net.V3V3" />
    <trace from="JSWD.GND" to="net.GND" />
    <trace from="JSWD.SWDIO" to="U1.SWDIO" />
    <trace from="JSWD.SWCLK" to="U1.SWCLK" />

    {leftHeaderLabels
      .filter((label) => label.startsWith("GP"))
      .map((label) => (
        <trace from={`J1.${label}`} to={`U1.${label}`} />
      ))}
    {rightHeaderLabels
      .filter((label) => label.startsWith("GP") && label !== "GP25_LED")
      .map((label) => (
        <trace from={`J2.${label}`} to={`U1.${label}`} />
      ))}
    <trace from="J2.GP25_LED" to="U1.GP25" />
  </board>
)
