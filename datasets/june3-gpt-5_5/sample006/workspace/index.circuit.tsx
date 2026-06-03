const mm = (value: number) => `${value.toFixed(3)}mm`

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
  pin25: "SWD",
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
  pin57: "GND",
} as const

const rp2040Footprint = (
  <footprint>
    {Array.from({ length: 14 }, (_, i) => (
      <smtpad
        portHints={[`pin${i + 1}`]}
        pcbX={mm(-3.6)}
        pcbY={mm(2.6 - i * 0.4)}
        width="0.75mm"
        height="0.23mm"
        shape="rect"
      />
    ))}
    {Array.from({ length: 14 }, (_, i) => (
      <smtpad
        portHints={[`pin${i + 15}`]}
        pcbX={mm(-2.6 + i * 0.4)}
        pcbY={mm(-3.6)}
        width="0.23mm"
        height="0.75mm"
        shape="rect"
      />
    ))}
    {Array.from({ length: 14 }, (_, i) => (
      <smtpad
        portHints={[`pin${i + 29}`]}
        pcbX={mm(3.6)}
        pcbY={mm(-2.6 + i * 0.4)}
        width="0.75mm"
        height="0.23mm"
        shape="rect"
      />
    ))}
    {Array.from({ length: 14 }, (_, i) => (
      <smtpad
        portHints={[`pin${i + 43}`]}
        pcbX={mm(2.6 - i * 0.4)}
        pcbY={mm(3.6)}
        width="0.23mm"
        height="0.75mm"
        shape="rect"
      />
    ))}
    <smtpad
      portHints={["pin57"]}
      pcbX="0mm"
      pcbY="0mm"
      width="4.1mm"
      height="4.1mm"
      shape="rect"
    />
  </footprint>
)

const soic8Footprint = (
  <footprint>
    {Array.from({ length: 4 }, (_, i) => (
      <smtpad
        portHints={[`pin${i + 1}`]}
        pcbX="-2.55mm"
        pcbY={mm(1.905 - i * 1.27)}
        width="1.5mm"
        height="0.55mm"
        shape="rect"
      />
    ))}
    {Array.from({ length: 4 }, (_, i) => (
      <smtpad
        portHints={[`pin${i + 5}`]}
        pcbX="2.55mm"
        pcbY={mm(-1.905 + i * 1.27)}
        width="1.5mm"
        height="0.55mm"
        shape="rect"
      />
    ))}
  </footprint>
)

const sot23_5Footprint = (
  <footprint>
    {[0, 1, 2].map((i) => (
      <smtpad
        portHints={[`pin${i + 1}`]}
        pcbX="-1mm"
        pcbY={mm(0.95 - i * 0.95)}
        width="0.6mm"
        height="0.35mm"
        shape="rect"
      />
    ))}
    {[0, 1].map((i) => (
      <smtpad
        portHints={[`pin${i + 4}`]}
        pcbX="1mm"
        pcbY={mm(-0.475 + i * 0.95)}
        width="0.6mm"
        height="0.35mm"
        shape="rect"
      />
    ))}
  </footprint>
)

const twoPadFootprint = (
  <footprint>
    <smtpad portHints={["pin1"]} pcbX="-0.8mm" pcbY="0mm" width="0.9mm" height="0.8mm" shape="rect" />
    <smtpad portHints={["pin2"]} pcbX="0.8mm" pcbY="0mm" width="0.9mm" height="0.8mm" shape="rect" />
  </footprint>
)

const crystalFootprint = (
  <footprint>
    <smtpad portHints={["pin1"]} pcbX="-1.1mm" pcbY="0mm" width="1.1mm" height="1.2mm" shape="rect" />
    <smtpad portHints={["pin2"]} pcbX="1.1mm" pcbY="0mm" width="1.1mm" height="1.2mm" shape="rect" />
  </footprint>
)

const switchFootprint = (
  <footprint>
    <smtpad portHints={["pin1"]} pcbX="-1.65mm" pcbY="1.1mm" width="1.2mm" height="0.8mm" shape="rect" />
    <smtpad portHints={["pin1"]} pcbX="-1.65mm" pcbY="-1.1mm" width="1.2mm" height="0.8mm" shape="rect" />
    <smtpad portHints={["pin2"]} pcbX="1.65mm" pcbY="1.1mm" width="1.2mm" height="0.8mm" shape="rect" />
    <smtpad portHints={["pin2"]} pcbX="1.65mm" pcbY="-1.1mm" width="1.2mm" height="0.8mm" shape="rect" />
  </footprint>
)

const header8Footprint = (
  <footprint insertionDirection="from_above">
    {Array.from({ length: 8 }, (_, i) => (
      <platedhole
        portHints={[`pin${i + 1}`]}
        pcbX="0mm"
        pcbY={mm(8.89 - i * 2.54)}
        outerDiameter="1.65mm"
        holeDiameter="0.9mm"
        shape="circle"
      />
    ))}
  </footprint>
)

export default () => (
  <board width="42mm" height="46mm" layers={2}>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint={rp2040Footprint}
      pinLabels={rp2040PinLabels}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["USB_DP", "USB_DM", "XIN", "XOUT", "RUN", "TESTEN"],
        },
        rightSide: {
          direction: "top-to-bottom",
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
            "GP23",
            "GP24",
            "GP25",
            "GP26_ADC0",
            "GP27_ADC1",
            "GP28_ADC2",
            "GP29_ADC3",
          ],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["IOVDD_1", "IOVDD_2", "IOVDD_3", "IOVDD_4", "IOVDD_5", "IOVDD_6", "USB_VDD", "ADC_AVDD", "VREG_VIN"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["GND", "DVDD_1", "DVDD_2", "VREG_VOUT", "QSPI_SS_N", "QSPI_SCLK", "QSPI_SD0", "QSPI_SD1", "QSPI_SD2", "QSPI_SD3", "SWCLK", "SWD"],
        },
      }}
    />

    <connector name="J1" standard="usb_c" pcbX="-17.7mm" pcbY="0mm" pcbRotation={270} schX={-7} schY={3} />
    <chip
      name="U2"
      manufacturerPartNumber="W25Q16JVSSIQ"
      footprint={soic8Footprint}
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
      pcbX="9.5mm"
      pcbY="-5.5mm"
      schX={4}
      schY={-5}
    />
    <chip
      name="U3"
      manufacturerPartNumber="TLV75533PDBVR"
      footprint={sot23_5Footprint}
      pinLabels={{ pin1: "IN", pin2: "GND", pin3: "EN", pin4: "NC", pin5: "OUT" }}
      pcbX="-8.5mm"
      pcbY="-8.5mm"
      schX={-5}
      schY={-3}
    />
    <chip
      name="Y1"
      manufacturerPartNumber="X322512MSB4SI"
      footprint={crystalFootprint}
      pinLabels={{ pin1: "XIN", pin2: "XOUT" }}
      pcbX="-7mm"
      pcbY="5.4mm"
      schX={-5}
      schY={0}
    />
    <chip
      name="D1"
      manufacturerPartNumber="19-217/GHC-YR1S2/3T"
      footprint={twoPadFootprint}
      pinLabels={{ pin1: "A", pin2: "K" }}
      pcbX="7mm"
      pcbY="5.7mm"
      schX={5}
      schY={2}
    />
    <chip
      name="SW1"
      manufacturerPartNumber="TS-1187A-B-A-B"
      footprint={switchFootprint}
      pinLabels={{ pin1: "A", pin2: "B" }}
      pcbX="-5.8mm"
      pcbY="-14mm"
      schX={-4}
      schY={-6}
    />
    <chip
      name="SW2"
      manufacturerPartNumber="TS-1187A-B-A-B"
      footprint={switchFootprint}
      pinLabels={{ pin1: "A", pin2: "B" }}
      pcbX="3.2mm"
      pcbY="-14mm"
      schX={0}
      schY={-6}
    />

    <chip
      name="P1"
      footprint={header8Footprint}
      pinLabels={{
        pin1: "VBUS",
        pin2: "3V3",
        pin3: "GND",
        pin4: "RUN",
        pin5: "SWCLK",
        pin6: "SWD",
        pin7: "GP0",
        pin8: "GP1",
      }}
      pcbX="14mm"
      pcbY="0mm"
      schX={8}
      schY={3}
    />

    <resistor name="R1" resistance="5.1k" footprint="0402" pcbX="-12.2mm" pcbY="6.2mm" schX={-8.4} schY={5.4} />
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX="-12.2mm" pcbY="4.9mm" schX={-8.4} schY={4.4} />
    <resistor name="R3" resistance="27" footprint="0402" pcbX="-8.2mm" pcbY="2.1mm" schX={-4.2} schY={3.4} />
    <resistor name="R4" resistance="27" footprint="0402" pcbX="-8.2mm" pcbY="0.8mm" schX={-4.2} schY={2.4} />
    <resistor name="R5" resistance="1k" footprint="0402" pcbX="4.6mm" pcbY="5.7mm" schX={3.6} schY={1.5} />
    <resistor name="R6" resistance="10k" footprint="0402" pcbX="-1.1mm" pcbY="-7.6mm" schX={-1} schY={-5} />
    <resistor name="R7" resistance="10k" footprint="0402" pcbX="6.8mm" pcbY="-11.2mm" schX={2} schY={-5} />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX="-11.3mm" pcbY="-8.7mm" schX={-7.2} schY={-3.4} schRotation={90} />
    <capacitor name="C2" capacitance="1uF" footprint="0402" pcbX="-5.6mm" pcbY="-7.3mm" schX={-3.2} schY={-3.4} schRotation={90} />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX="-5mm" pcbY="1.3mm" schX={-2.7} schY={4.6} schRotation={90} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX="5.2mm" pcbY="1.4mm" schX={2.9} schY={4.6} schRotation={90} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX="-2.1mm" pcbY="5.2mm" schX={-0.7} schY={4.6} schRotation={90} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX="2.1mm" pcbY="5.2mm" schX={1.1} schY={4.6} schRotation={90} />
    <capacitor name="C7" capacitance="27pF" footprint="0402" pcbX="-8.9mm" pcbY="7.3mm" schX={-6.1} schY={0.4} schRotation={90} />
    <capacitor name="C8" capacitance="27pF" footprint="0402" pcbX="-4.9mm" pcbY="4.2mm" schX={-4.3} schY={1.1} schRotation={90} />

    <trace from="J1.VBUS1" to="net.VBUS" />
    <trace from="J1.VBUS2" to="net.VBUS" />
    <trace from="J1.GND1" to="net.GND" />
    <trace from="J1.GND2" to="net.GND" />
    <trace from="J1.DP1" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.USB_DP" />
    <trace from="J1.DM1" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DM" />
    <trace from="J1.CC1" to="R1.pin1" />
    <trace from="J1.CC2" to="R2.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="R2.pin2" to="net.GND" />

    <trace from="U3.IN" to="net.VBUS" />
    <trace from="U3.EN" to="net.VBUS" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.OUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.IOVDD_1" to="net.V3_3" />
    <trace from="U1.IOVDD_2" to="net.V3_3" />
    <trace from="U1.IOVDD_3" to="net.V3_3" />
    <trace from="U1.IOVDD_4" to="net.V3_3" />
    <trace from="U1.IOVDD_5" to="net.V3_3" />
    <trace from="U1.IOVDD_6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_VIN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.DVDD_1" to="net.V1_1" />
    <trace from="U1.DVDD_2" to="net.V1_1" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="C3.pin1" to="net.V1_1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.V3_3" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C6.pin1" to="net.V3_3" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="Y1.XIN" to="U1.XIN" />
    <trace from="Y1.XOUT" to="U1.XOUT" />
    <trace from="Y1.XIN" to="C7.pin1" />
    <trace from="Y1.XOUT" to="C8.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="C8.pin2" to="net.GND" />

    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.CS" to="U1.QSPI_SS_N" />
    <trace from="U2.SCLK" to="U1.QSPI_SCLK" />
    <trace from="U2.IO0" to="U1.QSPI_SD0" />
    <trace from="U2.IO1" to="U1.QSPI_SD1" />
    <trace from="U2.IO2" to="U1.QSPI_SD2" />
    <trace from="U2.IO3" to="U1.QSPI_SD3" />

    <trace from="U1.GP25" to="R5.pin1" />
    <trace from="R5.pin2" to="D1.A" />
    <trace from="D1.K" to="net.GND" />
    <trace from="U1.RUN" to="R6.pin1" />
    <trace from="R6.pin2" to="net.V3_3" />
    <trace from="U1.RUN" to="SW1.A" />
    <trace from="SW1.B" to="net.GND" />
    <trace from="U1.QSPI_SS_N" to="R7.pin1" />
    <trace from="R7.pin2" to="net.V3_3" />
    <trace from="U1.QSPI_SS_N" to="SW2.A" />
    <trace from="SW2.B" to="net.GND" />

    <trace from="P1.VBUS" to="net.VBUS" />
    <trace from="P1.3V3" to="net.V3_3" />
    <trace from="P1.GND" to="net.GND" />
    <trace from="P1.RUN" to="U1.RUN" />
    <trace from="P1.SWCLK" to="U1.SWCLK" />
    <trace from="P1.SWD" to="U1.SWD" />
    <trace from="P1.GP0" to="U1.GP0" />
    <trace from="P1.GP1" to="U1.GP1" />

    <copperpour connectsTo="net.GND" layer="top" clearance="0.18mm" boardEdgeMargin="0.4mm" />
    <copperpour connectsTo="net.GND" layer="bottom" clearance="0.18mm" boardEdgeMargin="0.4mm" />

    <silkscreentext text="RP2040 BREAKOUT" pcbX="0mm" pcbY="11mm" fontSize="1.2mm" />
    <silkscreentext text="USB" pcbX="-13.4mm" pcbY="-4.7mm" fontSize="0.8mm" />
    <silkscreentext text="RUN" pcbX="-4.6mm" pcbY="-11.4mm" fontSize="0.8mm" />
    <silkscreentext text="BOOT" pcbX="2.6mm" pcbY="-11.4mm" fontSize="0.8mm" />
  </board>
)
