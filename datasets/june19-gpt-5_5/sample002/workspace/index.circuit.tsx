export default () => (
  <board width="90mm" height="70mm" layers={2} routingDisabled>
    <net name="GND" />
    <net name="VBUS_RAW" />
    <net name="VBUS_SENSE" />
    <net name="VBUS_PD" />
    <net name="PD_3V3" />
    <net name="VREG_2V7" />
    <net name="VREG_1V2" />
    <net name="VSYS" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="I2C_SCL" />
    <net name="I2C_SDA" />
    <net name="PD_ALERT" />
    <net name="PD_ATTACH" />
    <net name="PD_POWER_OK" />
    <net name="PD_GATE_EN" />
    <net name="LED_VIN" />
    <net name="LED_SW" />
    <net name="LED_ANODE" />
    <net name="LED_CATHODE" />
    <net name="SENSE_P" />
    <net name="SENSE_N" />
    <net name="LM_GATE" />
    <net name="LM_COFF" />
    <net name="LM_IADJ" />
    <net name="LM_EN" />
    <net name="DIM_PWM_HF" />
    <net name="DIM_DC" />
    <net name="FRAME_SYNC" />
    <net name="NTC_SENSE" />

    <schematicsection name="usb_pd" displayName="USB-C PD Sink" />
    <schematicsection name="power_path" displayName="Protected PD Power Path" />
    <schematicsection name="led_driver" displayName="LM3409 Constant Current Driver" />
    <schematicsection name="dimming" displayName="Frame-Safe Analog Dimming" />
    <schematicsection name="ring" displayName="Ring LED Load and Harness" />
    <schematicsection name="debug" displayName="Programming and Test" />

    <connector
      name="J1"
      footprint="pinheader_1x11"
      schSectionName="usb_pd"
      schHeight={1.2}
      pinLabels={{
        pin1: "VBUS_A4",
        pin2: "VBUS_A9",
        pin3: "VBUS_B4",
        pin4: "VBUS_B9",
        pin5: "GND_A1",
        pin6: "GND_A12",
        pin7: "GND_B1",
        pin8: "GND_B12",
        pin9: "CC1",
        pin10: "CC2",
        pin11: "SHIELD",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VBUS_A4", "VBUS_A9", "VBUS_B4", "VBUS_B9", "CC1", "CC2"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GND_A1", "GND_A12", "GND_B1", "GND_B12", "SHIELD"],
        },
      }}
      connections={{
        VBUS_A4: "net.VBUS_RAW",
        VBUS_A9: "net.VBUS_RAW",
        VBUS_B4: "net.VBUS_RAW",
        VBUS_B9: "net.VBUS_RAW",
        GND_A1: "net.GND",
        GND_A12: "net.GND",
        GND_B1: "net.GND",
        GND_B12: "net.GND",
        CC1: "net.CC1",
        CC2: "net.CC2",
        SHIELD: "net.GND",
      }}
    />

    <chip
      name="U1"
      footprint="qfn24"
      schSectionName="usb_pd"
      schX={-10.42}
      schY={-6.31}
      schWidth={2.035}
      schHeight={2.2}
      pinLabels={{
        pin1: "CC1DB",
        pin2: "CC1",
        pin3: "CC2",
        pin4: "CC2DB",
        pin5: "RESET",
        pin6: "ADDR1",
        pin7: "SCL",
        pin8: "SDA",
        pin9: "DISCH",
        pin10: "GND",
        pin11: "ADDR0",
        pin12: "VDD",
        pin13: "V27",
        pin14: "VSYS",
        pin15: "V12",
        pin16: "ALERT",
        pin17: "ATTACH",
        pin18: "VEN",
        pin19: "POK2",
        pin20: "POK3",
        pin21: "GPIO",
        pin22: "A_B_SIDE",
        pin23: "VBS",
        pin24: "EP",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["CC1DB", "CC1", "CC2", "CC2DB", "RESET", "ADDR1", "SCL", "SDA"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "VBS",
            "VEN",
            "POK2",
            "POK3",
            "GPIO",
            "A_B_SIDE",
            "ATTACH",
            "ALERT",
          ],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["VDD", "V27", "VSYS", "V12"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["DISCH", "GND", "ADDR0", "EP"],
        },
      }}
      connections={{
        CC1DB: "net.CC1",
        CC1: "net.CC1",
        CC2: "net.CC2",
        CC2DB: "net.CC2",
        VDD: "net.VBUS_RAW",
        VBS: "net.VBUS_SENSE",
        VSYS: "net.VSYS",
        V27: "net.VREG_2V7",
        V12: "net.VREG_1V2",
        SCL: "net.I2C_SCL",
        SDA: "net.I2C_SDA",
        ALERT: "net.PD_ALERT",
        ATTACH: "net.PD_ATTACH",
        VEN: "net.PD_GATE_EN",
        POK2: "net.PD_POWER_OK",
        POK3: "net.LM_EN",
        ADDR0: "net.GND",
        ADDR1: "net.GND",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />

    <fuse
      name="F1"
      schSectionName="power_path"
      schX={-2.69}
      schY={-4.44}
      footprint="1206"
      currentRating="5A"
      connections={{ pin1: "net.VBUS_RAW", pin2: "net.VBUS_PD" }}
    />
    <diode
      name="D1"
      schSectionName="power_path"
      footprint="sod323"
      connections={{ anode: "net.GND", cathode: "net.VBUS_RAW" }}
    />
    <resistor
      name="R1"
      schSectionName="power_path"
      schX={-2.18}
      schY={-2.62}
      resistance="1k"
      footprint="0603"
      connections={{ pin1: "net.VBUS_PD", pin2: "net.VBUS_SENSE" }}
    />
    <capacitor
      name="C1"
      schSectionName="power_path"
      capacitance="1uF"
      footprint="0603"
      connections={{ pin1: "net.VBUS_SENSE", pin2: "net.GND" }}
    />
    <chip
      name="Q1"
      schSectionName="power_path"
      footprint="sot23"
      schX={0.64}
      schY={-4.51}
      schHeight={0.4}
      pinLabels={{ pin1: "GATE", pin2: "SOURCE", pin3: "DRAIN" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["SOURCE", "GATE"] },
        rightSide: { direction: "top-to-bottom", pins: ["DRAIN"] },
      }}
      connections={{
        SOURCE: "net.VBUS_PD",
        GATE: "net.PD_GATE_EN",
        DRAIN: "net.LED_VIN",
      }}
    />
    <resistor
      name="R2"
      schSectionName="power_path"
      schX={0.08}
      schY={-2.05}
      resistance="100k"
      footprint="0603"
      connections={{ pin1: "net.VBUS_PD", pin2: "net.PD_GATE_EN" }}
    />
    <capacitor
      name="C2"
      schSectionName="power_path"
      capacitance="47uF"
      footprint="1210"
      connections={{ pin1: "net.LED_VIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      schSectionName="usb_pd"
      schX={-14.48}
      schY={-4.68}
      schOrientation="vertical"
      capacitance="100nF"
      footprint="0402"
      connections={{ pin1: "net.VREG_2V7", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      schSectionName="usb_pd"
      schX={-15.67}
      schY={-6.99}
      schOrientation="vertical"
      capacitance="100nF"
      footprint="0402"
      connections={{ pin1: "net.VREG_1V2", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      schSectionName="usb_pd"
      schX={-6.51}
      schY={-5.56}
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0603"
      connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
    />

    <chip
      name="U2"
      footprint="msop10"
      schSectionName="led_driver"
      schX={10.05}
      schY={-4.28}
      schHeight={1}
      pinLabels={{
        pin1: "VCC",
        pin2: "GATE",
        pin3: "CSP",
        pin4: "CSN",
        pin5: "COFF",
        pin6: "IADJ",
        pin7: "EN",
        pin8: "GND",
        pin9: "NC",
        pin10: "EP",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VCC", "EN", "IADJ", "COFF", "GND", "EP"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GATE", "CSP", "CSN", "NC"],
        },
      }}
      connections={{
        VCC: "net.LED_VIN",
        GATE: "net.LM_GATE",
        CSP: "net.SENSE_P",
        CSN: "net.SENSE_N",
        COFF: "net.LM_COFF",
        IADJ: "net.LM_IADJ",
        EN: "net.LM_EN",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />
    <chip
      name="Q2"
      schSectionName="led_driver"
      footprint="soic8"
      schHeight={0.4}
      pinLabels={{ pin1: "SOURCE", pin2: "GATE", pin3: "DRAIN" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["SOURCE", "GATE"] },
        rightSide: { direction: "top-to-bottom", pins: ["DRAIN"] },
      }}
      connections={{
        SOURCE: "net.LED_VIN",
        GATE: "net.LM_GATE",
        DRAIN: "net.LED_SW",
      }}
    />
    <resistor
      name="R3"
      schSectionName="led_driver"
      resistance="10"
      footprint="0603"
      connections={{ pin1: "net.LM_GATE", pin2: "net.LED_VIN" }}
    />
    <resistor
      name="R4"
      schSectionName="led_driver"
      resistance="150m"
      footprint="2512"
      connections={{ pin1: "net.SENSE_P", pin2: "net.SENSE_N" }}
    />
    <inductor
      name="L1"
      schSectionName="led_driver"
      inductance="22uH"
      footprint="0805"
      connections={{ pin1: "net.LED_SW", pin2: "net.SENSE_P" }}
    />
    <diode
      name="D2"
      schSectionName="led_driver"
      footprint="sma"
      connections={{ anode: "net.GND", cathode: "net.LED_SW" }}
    />
    <capacitor
      name="C6"
      schSectionName="led_driver"
      capacitance="4.7nF"
      footprint="0402"
      connections={{ pin1: "net.LM_COFF", pin2: "net.GND" }}
    />
    <resistor
      name="R5"
      schSectionName="led_driver"
      schX={6.12}
      schY={-4.19}
      resistance="100k"
      footprint="0603"
      connections={{ pin1: "net.LM_COFF", pin2: "net.SENSE_N" }}
    />
    <capacitor
      name="C7"
      schSectionName="led_driver"
      capacitance="100nF"
      footprint="0402"
      connections={{ pin1: "net.LED_VIN", pin2: "net.GND" }}
    />

    <chip
      name="U3"
      footprint="qfn32"
      schSectionName="dimming"
      pinLabels={{
        pin1: "VDD",
        pin2: "GND",
        pin3: "PWM_31K",
        pin4: "FRAME_SYNC",
        pin5: "I2C_SCL",
        pin6: "I2C_SDA",
        pin7: "NTC_ADC",
        pin8: "FAULT_IN",
        pin9: "MODE0",
        pin10: "MODE1",
        pin11: "UP",
        pin12: "DOWN",
        pin13: "NC1",
        pin14: "NC2",
        pin15: "NC3",
        pin16: "NC4",
        pin17: "NC5",
        pin18: "NC6",
        pin19: "NC7",
        pin20: "NC8",
        pin21: "NC9",
        pin22: "NC10",
        pin23: "NC11",
        pin24: "NC12",
        pin25: "NC13",
        pin26: "NC14",
        pin27: "NC15",
        pin28: "NC16",
        pin29: "NC17",
        pin30: "NC18",
        pin31: "NC19",
        pin32: "NC20",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "GND", "I2C_SCL", "I2C_SDA", "FRAME_SYNC", "NTC_ADC"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["PWM_31K", "FAULT_IN", "MODE0", "MODE1", "UP", "DOWN"],
        },
      }}
      connections={{
        VDD: "net.PD_3V3",
        GND: "net.GND",
        PWM_31K: "net.DIM_PWM_HF",
        FRAME_SYNC: "net.FRAME_SYNC",
        I2C_SCL: "net.I2C_SCL",
        I2C_SDA: "net.I2C_SDA",
        NTC_ADC: "net.NTC_SENSE",
        FAULT_IN: "net.PD_ALERT",
      }}
    />
    <chip
      name="U4"
      footprint="sot23_5"
      schSectionName="dimming"
      schHeight={0.6}
      pinLabels={{
        pin1: "VIN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "VOUT",
      }}
      connections={{
        VIN: "net.VSYS",
        GND: "net.GND",
        EN: "net.PD_POWER_OK",
        VOUT: "net.PD_3V3",
      }}
    />
    <resistor
      name="R6"
      schSectionName="dimming"
      resistance="4.7k"
      footprint="0603"
      connections={{ pin1: "net.PD_3V3", pin2: "net.I2C_SCL" }}
    />
    <resistor
      name="R7"
      schSectionName="dimming"
      resistance="4.7k"
      footprint="0603"
      connections={{ pin1: "net.PD_3V3", pin2: "net.I2C_SDA" }}
    />
    <resistor
      name="R8"
      schSectionName="dimming"
      resistance="10k"
      footprint="0603"
      connections={{ pin1: "net.DIM_PWM_HF", pin2: "net.DIM_DC" }}
    />
    <capacitor
      name="C8"
      schSectionName="dimming"
      capacitance="1uF"
      footprint="0603"
      connections={{ pin1: "net.DIM_DC", pin2: "net.GND" }}
    />
    <resistor
      name="R9"
      schSectionName="dimming"
      resistance="1k"
      footprint="0603"
      connections={{ pin1: "net.DIM_DC", pin2: "net.LM_IADJ" }}
    />
    <capacitor
      name="C9"
      schSectionName="dimming"
      capacitance="100nF"
      footprint="0402"
      connections={{ pin1: "net.LM_IADJ", pin2: "net.GND" }}
    />
    <resistor
      name="R10"
      schSectionName="dimming"
      resistance="10k"
      footprint="0603"
      connections={{ pin1: "net.PD_3V3", pin2: "net.LM_EN" }}
    />
    <capacitor
      name="C10"
      schSectionName="dimming"
      capacitance="10uF"
      footprint="0805"
      connections={{ pin1: "net.PD_3V3", pin2: "net.GND" }}
    />

    <connector
      name="J2"
      schSectionName="ring"
      footprint="pinheader_1x2"
      pinLabels={{ pin1: "LED_PLUS", pin2: "LED_MINUS" }}
      connections={{ LED_PLUS: "net.LED_ANODE", LED_MINUS: "net.LED_CATHODE" }}
    />
    <led
      name="D3"
      schSectionName="ring"
      footprint="led0603"
      color="white"
      schDisplayValue="Ring segment A"
      connections={{ anode: "net.LED_ANODE", cathode: "net.LED_CATHODE" }}
    />
    <resistor
      name="R11"
      schSectionName="ring"
      schX={4.7}
      schY={-16.76}
      resistance="10k"
      footprint="0603"
      connections={{ pin1: "net.PD_3V3", pin2: "net.NTC_SENSE" }}
    />
    <chip
      name="RT1"
      schSectionName="ring"
      schX={1.32}
      schY={-16.97}
      footprint="0603"
      pinLabels={{ pin1: "NTC_A", pin2: "NTC_B" }}
      connections={{ NTC_A: "net.NTC_SENSE", NTC_B: "net.GND" }}
    />
    <trace from="net.SENSE_N" to="net.LED_ANODE" />
    <trace from="net.LED_CATHODE" to="net.GND" />

    <connector
      name="J3"
      schSectionName="debug"
      footprint="pinheader_1x6"
      pinLabels={{
        pin1: "GND",
        pin2: "3V3",
        pin3: "SCL",
        pin4: "SDA",
        pin5: "ALERT",
        pin6: "FRAME_SYNC",
      }}
      connections={{
        GND: "net.GND",
        "3V3": "net.PD_3V3",
        SCL: "net.I2C_SCL",
        SDA: "net.I2C_SDA",
        ALERT: "net.PD_ALERT",
        FRAME_SYNC: "net.FRAME_SYNC",
      }}
    />
    <testpoint
      name="TP1"
      schSectionName="debug"
      footprint="pinheader_1x1"
      connections={{ pin1: "net.VBUS_RAW" }}
    />
    <testpoint
      name="TP2"
      schSectionName="debug"
      footprint="pinheader_1x1"
      connections={{ pin1: "net.LED_VIN" }}
    />
    <testpoint
      name="TP3"
      schSectionName="debug"
      footprint="pinheader_1x1"
      connections={{ pin1: "net.LM_IADJ" }}
    />
    <testpoint
      name="TP4"
      schSectionName="debug"
      footprint="pinheader_1x1"
      connections={{ pin1: "net.DIM_PWM_HF" }}
    />
  </board>
)
