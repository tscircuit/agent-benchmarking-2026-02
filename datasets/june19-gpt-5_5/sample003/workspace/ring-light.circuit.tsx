import "tscircuit"

export default () => (
  <board width="96mm" height="72mm" layers={2} routingDisabled>
    <net name="GND" />
    <net name="VBUS_USB" />
    <net name="PPVAR" />
    <net name="V5_USB" />
    <net name="V3_3" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="I2C_SCL" />
    <net name="I2C_SDA" />
    <net name="PD_RESET" />
    <net name="PD_ATTACH" />
    <net name="LED_SW" />
    <net name="LED_ANODE" />
    <net name="LED_CATHODE" />
    <net name="CSN" />
    <net name="CSP" />
    <net name="GATE" />
    <net name="HG_BOOT" />
    <net name="DIM_PWM" />
    <net name="IADJ_DAC" />
    <net name="COFF" />
    <net name="OVP" />
    <net name="NTC_SENSE" />
    <net name="USB_D_P" />
    <net name="USB_D_N" />
    <net name="PROG_HEADER" />

    <chip
      name="J1"
      schX={-5.09}
      schY={-0.302}
      footprint="qfn16"
      pinLabels={{
        pin1: "VBUS1",
        pin2: "VBUS2",
        pin3: "VBUS3",
        pin4: "VBUS4",
        pin5: "GND1",
        pin6: "GND2",
        pin7: "GND3",
        pin8: "GND4",
        pin9: "CC1",
        pin10: "CC2",
        pin11: "DP1",
        pin12: "DP2",
        pin13: "DM1",
        pin14: "DM2",
        pin15: "SBU1",
        pin16: "SBU2",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VBUS1", "VBUS2", "VBUS3", "VBUS4", "GND1", "GND2", "GND3", "GND4"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["CC1", "CC2", "DP1", "DP2", "DM1", "DM2", "SBU1", "SBU2"],
        },
      }}
      connections={{
        VBUS1: "net.VBUS_USB",
        VBUS2: "net.VBUS_USB",
        VBUS3: "net.VBUS_USB",
        VBUS4: "net.VBUS_USB",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        GND4: "net.GND",
        CC1: "net.CC1",
        CC2: "net.CC2",
        DP1: "net.USB_D_P",
        DP2: "net.USB_D_P",
        DM1: "net.USB_D_N",
        DM2: "net.USB_D_N",
      }}
    />
    <fuse
      name="F1"
      schX={0.732}
      schY={3.965}
      currentRating="5A"
      footprint="1206"
      supplierPartNumbers={{ jlcpcb: ["C70076"] }}
      connections={{ pin1: "net.VBUS_USB", pin2: "net.PPVAR" }}
    />
    <diode
      name="D1"
      schX={-6.9}
      schY={0.864}
      footprint="sod323"
      connections={{ anode: "net.GND", cathode: "net.VBUS_USB" }}
    />
    <capacitor
      name="C1"
      schX={-1.123}
      schY={3.955}
      schOrientation="vertical"
      capacitance="10uF"
      footprint="1206"
      supplierPartNumbers={{ jlcpcb: ["C13585"] }}
      connections={{ pin1: "net.PPVAR", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      schX={-3.163}
      schY={3.955}
      schOrientation="vertical"
      capacitance="100nF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      connections={{ pin1: "net.PPVAR", pin2: "net.GND" }}
    />

    <chip
      name="U1"
      schX={0.61}
      schY={0.9}
      footprint="qfn24"
      pinLabels={{
        pin1: "CC1",
        pin2: "CC2",
        pin3: "VBUS_VS",
        pin4: "VSYS",
        pin5: "VREG_1V2",
        pin6: "VREG_2V7",
        pin7: "SCL",
        pin8: "SDA",
        pin9: "ALERT",
        pin10: "ATTACH",
        pin11: "RESET",
        pin12: "ADDR0",
        pin13: "GPIO",
        pin14: "GND",
        pin15: "VDD",
        pin16: "DISCH",
        pin17: "VBUS_EN_SNK",
        pin18: "POWER_OK2",
        pin19: "POWER_OK3",
        pin20: "NC1",
        pin21: "NC2",
        pin22: "NC3",
        pin23: "NC4",
        pin24: "EP",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "CC1",
            "CC2",
            "VBUS_VS",
            "VSYS",
            "VDD",
            "RESET",
            "ADDR0",
            "GND",
            "VREG_1V2",
            "VREG_2V7",
            "DISCH",
            "EP",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "SCL",
            "SDA",
            "ALERT",
            "ATTACH",
            "VBUS_EN_SNK",
            "POWER_OK2",
            "POWER_OK3",
            "GPIO",
            "NC1",
            "NC2",
            "NC3",
            "NC4",
          ],
        },
      }}
      connections={{
        CC1: "net.CC1",
        CC2: "net.CC2",
        VBUS_VS: "net.VBUS_USB",
        VSYS: "net.V5_USB",
        VDD: "net.V5_USB",
        SCL: "net.I2C_SCL",
        SDA: "net.I2C_SDA",
        RESET: "net.PD_RESET",
        ATTACH: "net.PD_ATTACH",
        VBUS_EN_SNK: "net.PD_ATTACH",
        ADDR0: "net.GND",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />
    <resistor
      name="R1"
      schX={-8.759}
      schY={0.864}
      resistance="1M"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C22935"] }}
      connections={{ pin1: "net.VBUS_USB", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      schX={-0.64}
      schY={-1.65}
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      connections={{ pin1: "U1.VREG_2V7", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      schX={-1.4}
      schY={-1.6}
      schOrientation="vertical"
      capacitance="100nF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      connections={{ pin1: "U1.VREG_1V2", pin2: "net.GND" }}
    />

    <chip
      name="U2"
      schX={0.715}
      schY={-4.1}
      footprint="sot223"
      pinLabels={{ pin1: "IN", pin2: "GND", pin3: "OUT", pin4: "TAB" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["IN", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["OUT", "TAB"] },
      }}
      supplierPartNumbers={{ jlcpcb: ["C347222"] }}
      connections={{ IN: "net.V5_USB", GND: "net.GND", OUT: "net.V3_3", TAB: "net.V3_3" }}
    />
    <capacitor
      name="C5"
      schX={-2.01}
      schY={-3.955}
      schOrientation="vertical"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      connections={{ pin1: "net.V5_USB", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      schX={2.22}
      schY={-6.555}
      schOrientation="vertical"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <chip
      name="U3"
      schX={5.68}
      schY={1.4}
      footprint="tssop14"
      pinLabels={{
        pin1: "VIN",
        pin2: "EN",
        pin3: "VCC",
        pin4: "COFF",
        pin5: "IADJ",
        pin6: "DIM",
        pin7: "GND",
        pin8: "CSP",
        pin9: "CSN",
        pin10: "PGATE",
        pin11: "BOOT",
        pin12: "SW",
        pin13: "OVP",
        pin14: "FLT",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VIN", "EN", "VCC", "COFF", "IADJ", "DIM", "GND"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["CSP", "CSN", "PGATE", "BOOT", "SW", "OVP", "FLT"],
        },
      }}
      connections={{
        VIN: "net.PPVAR",
        EN: "net.PD_ATTACH",
        VCC: "net.V5_USB",
        COFF: "net.COFF",
        IADJ: "net.IADJ_DAC",
        DIM: "net.DIM_PWM",
        GND: "net.GND",
        CSP: "net.CSP",
        CSN: "net.CSN",
        PGATE: "net.GATE",
        BOOT: "net.HG_BOOT",
        SW: "net.LED_SW",
        OVP: "net.OVP",
      }}
    />
    <chip
      name="Q1"
      schX={4.41}
      schY={4.5}
      schHeight={0.4}
      footprint="soic8"
      pinLabels={{ pin1: "GATE", pin2: "SOURCE", pin3: "DRAIN" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["GATE", "SOURCE"] },
        rightSide: { direction: "top-to-bottom", pins: ["DRAIN"] },
      }}
      connections={{ GATE: "net.GATE", SOURCE: "net.PPVAR", DRAIN: "net.LED_SW" }}
    />
    <diode
      name="D2"
      schX={8.08}
      schY={0.72}
      footprint="sma"
      supplierPartNumbers={{ jlcpcb: ["C8678"] }}
      connections={{ anode: "net.GND", cathode: "net.LED_SW" }}
    />
    <inductor
      name="L1"
      schX={7.648}
      schY={2.675}
      inductance="47uH"
      footprint="1210"
      connections={{ pin1: "net.LED_SW", pin2: "net.CSP" }}
    />
    <resistor
      name="R2"
      schX={7.83}
      schY={4.49}
      resistance="0.15"
      footprint="2512"
      supplierPartNumbers={{ jlcpcb: ["C76264"] }}
      connections={{ pin1: "net.CSP", pin2: "net.CSN" }}
    />
    <capacitor
      name="C7"
      schX={9.33}
      schY={0.825}
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      connections={{ pin1: "net.HG_BOOT", pin2: "net.LED_SW" }}
    />
    <resistor
      name="R3"
      schX={2.174}
      schY={6.285}
      resistance="100k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C25803"] }}
      connections={{ pin1: "net.COFF", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      schX={0.164}
      schY={6.285}
      schOrientation="vertical"
      capacitance="2.2nF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C1604"] }}
      connections={{ pin1: "net.COFF", pin2: "net.GND" }}
    />
    <resistor
      name="R4"
      schX={9.983}
      schY={2.834}
      resistance="499k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C23178"] }}
      connections={{ pin1: "net.LED_ANODE", pin2: "net.OVP" }}
    />
    <resistor
      name="R5"
      schX={11.474}
      schY={0.69}
      resistance="24.9k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C137753"] }}
      connections={{ pin1: "net.OVP", pin2: "net.GND" }}
    />

    <chip
      name="U4"
      schX={4.425}
      schY={-2.305}
      footprint="qfn32"
      pinLabels={{
        pin1: "VDD",
        pin2: "GND",
        pin3: "USB_DP",
        pin4: "USB_DN",
        pin5: "PD_SCL",
        pin6: "PD_SDA",
        pin7: "PD_RESET",
        pin8: "PD_ATTACH",
        pin9: "DIM_PWM",
        pin10: "DAC_OUT",
        pin11: "NTC_ADC",
        pin12: "ENC_A",
        pin13: "ENC_B",
        pin14: "SW",
        pin15: "SYNC_IN",
        pin16: "PROG",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "GND", "USB_DP", "USB_DN", "PD_SCL", "PD_SDA", "PD_RESET", "PD_ATTACH"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["DIM_PWM", "DAC_OUT", "NTC_ADC", "ENC_A", "ENC_B", "SW", "SYNC_IN", "PROG"],
        },
      }}
      connections={{
        VDD: "net.V3_3",
        GND: "net.GND",
        USB_DP: "net.USB_D_P",
        USB_DN: "net.USB_D_N",
        PD_SCL: "net.I2C_SCL",
        PD_SDA: "net.I2C_SDA",
        PD_RESET: "net.PD_RESET",
        PD_ATTACH: "net.PD_ATTACH",
        DIM_PWM: "net.DIM_PWM",
        DAC_OUT: "net.IADJ_DAC",
        NTC_ADC: "net.NTC_SENSE",
        PROG: "net.PROG_HEADER",
      }}
    />
    <resistor
      name="R6"
      schX={3.67}
      schY={-7.36}
      resistance="2.2k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C4190"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.I2C_SCL" }}
    />
    <resistor
      name="R7"
      schX={-0.04}
      schY={-6.555}
      resistance="2.2k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C4190"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.I2C_SDA" }}
    />
    <resistor
      name="R8"
      schX={7.938}
      schY={-5.146}
      resistance="100"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C22775"] }}
      connections={{ pin1: "U4.DIM_PWM", pin2: "net.DIM_PWM" }}
    />
    <capacitor
      name="C9"
      schX={-2.78}
      schY={-6.265}
      schOrientation="vertical"
      capacitance="100nF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      schX={10.108}
      schY={-1.62}
      schOrientation="vertical"
      capacitance="10nF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C57112"] }}
      connections={{ pin1: "net.IADJ_DAC", pin2: "net.GND" }}
    />
    <resistor
      name="R9"
      schX={5.93}
      schY={-7.36}
      resistance="10k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.NTC_SENSE" }}
    />
    <resistor
      name="RT1"
      schX={1.836}
      schY={-8.865}
      resistance="10k"
      footprint="0603"
      connections={{ pin1: "net.NTC_SENSE", pin2: "net.GND" }}
    />
    <chip
      name="J2"
      schX={4.625}
      schY={-4.905}
      footprint="pinrow4"
      pinLabels={{ pin1: "V3_3", pin2: "SWDIO", pin3: "SWCLK", pin4: "GND" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["V3_3", "SWDIO"] },
        rightSide: { direction: "top-to-bottom", pins: ["SWCLK", "GND"] },
      }}
      connections={{ pin1: "net.V3_3", pin2: "net.PROG_HEADER", pin3: "U4.SYNC_IN", pin4: "net.GND" }}
    />

    <chip
      name="J3"
      schX={13.143}
      schY={3.045}
      footprint="pinrow2"
      pinLabels={{ pin1: "LED_PLUS", pin2: "LED_MINUS" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["LED_PLUS"] },
        rightSide: { direction: "top-to-bottom", pins: ["LED_MINUS"] },
      }}
      connections={{ pin1: "net.LED_ANODE", pin2: "net.LED_CATHODE" }}
    />
    <led
      name="D3"
      schX={13.389}
      schY={0.68}
      schRotation={180}
      color="white"
      footprint="1206"
      connections={{ anode: "net.LED_ANODE", cathode: "net.LED_CATHODE" }}
    />
    <led
      name="D4"
      schX={15.239}
      schY={0.68}
      color="white"
      footprint="1206"
      connections={{ anode: "net.LED_ANODE", cathode: "net.LED_CATHODE" }}
    />
    <capacitor
      name="C11"
      schX={17.184}
      schY={0.356}
      schOrientation="vertical"
      capacitance="4.7uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C1779"] }}
      connections={{ pin1: "net.LED_ANODE", pin2: "net.LED_CATHODE" }}
    />
    <trace from="U1.VREG_1V2" to="C4.pin1" schDisplayLabel="STUSB4500 1V2 decoupling" />
    <trace from="U1.VREG_2V7" to="C3.pin1" schDisplayLabel="STUSB4500 2V7 decoupling" />
    <trace from="net.CSN" to="net.LED_ANODE" />
    <trace from="net.LED_CATHODE" to="net.GND" />
  </board>
)
