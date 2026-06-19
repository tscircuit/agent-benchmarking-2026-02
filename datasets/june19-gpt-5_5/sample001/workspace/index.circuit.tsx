import type { ChipProps } from "tscircuit"

const jlc = (part: string) => ({ jlcpcb: [part], lcsc: [part] })

const stusb4500Pins = {
  pin1: "ADDR0",
  pin2: "ADDR1",
  pin3: "ALERT",
  pin4: "SDA",
  pin5: "SCL",
  pin6: "RESET",
  pin7: "ATTACH",
  pin8: "POWER_OK2",
  pin9: "POWER_OK3",
  pin10: "VBUS_EN_SNK",
  pin11: "VREG_1V2",
  pin12: "VREG_2V7",
  pin13: "VDD",
  pin14: "VSYS",
  pin15: "VBUS_VS",
  pin16: "VBUS_VS_DISCH",
  pin17: "CC1",
  pin18: "CC2",
  pin19: "GND1",
  pin20: "GND2",
  pin21: "GND3",
  pin22: "NC1",
  pin23: "NC2",
  pin24: "EP",
} as const

const Stusb4500 = (props: ChipProps<typeof stusb4500Pins>) => (
  <chip
    {...props}
    manufacturerPartNumber="STUSB4500QTR"
    footprint="qfn24"
    supplierPartNumbers={jlc("C2672532")}
    pinLabels={stusb4500Pins}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["CC1", "CC2", "VBUS_VS", "VBUS_VS_DISCH", "VSYS", "VDD"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "VBUS_EN_SNK",
          "POWER_OK2",
          "POWER_OK3",
          "ATTACH",
          "ALERT",
          "RESET",
        ],
      },
      topSide: {
        direction: "left-to-right",
        pins: ["SDA", "SCL", "ADDR0", "ADDR1"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["VREG_1V2", "VREG_2V7", "GND1", "GND2", "GND3", "EP"],
      },
    }}
  />
)

const lm3409Pins = {
  pin1: "VIN",
  pin2: "VCC",
  pin3: "EN",
  pin4: "IADJ",
  pin5: "COFF",
  pin6: "GND",
  pin7: "CSP",
  pin8: "CSN",
  pin9: "HG",
  pin10: "LDRV",
} as const

const Lm3409 = (props: ChipProps<typeof lm3409Pins>) => (
  <chip
    {...props}
    manufacturerPartNumber="LM3409HVMY/NOPB"
    footprint="msop10"
    supplierPartNumbers={jlc("C129709")}
    pinLabels={lm3409Pins}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "VCC", "EN", "IADJ", "COFF"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["HG", "LDRV", "CSP", "CSN", "GND"],
      },
    }}
  />
)

export default () => (
  <board width="95mm" height="55mm" layers={2} routingDisabled>
    <net name="VBUS_RAW" />
    <net name="VBUS_PD" />
    <net name="VLED_20V" />
    <net name="V3_3" />
    <net name="V1_2" />
    <net name="V2_7" />
    <net name="GND" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="I2C_SDA" />
    <net name="I2C_SCL" />
    <net name="PD_ALERT" />
    <net name="PD_RESET" />
    <net name="PD_ATTACH" />
    <net name="PD_OK" />
    <net name="DIM_PWM" />
    <net name="DIM_ANALOG" />
    <net name="LED_SW" />
    <net name="LED_ANODE" />
    <net name="LED_CATHODE" />
    <net name="SNS_P" />
    <net name="SNS_N" />
    <net name="COFF" />
    <net name="LED_ENABLE" />

    <schematicsection name="usb_pd" displayName="USB-C PD Sink Input" />
    <schematicsection name="logic" displayName="PD Control and Dimming" />
    <schematicsection name="buck" displayName="LM3409 LED Buck Driver" />
    <schematicsection name="output" displayName="Ring Light Output" />

    <connector
      name="J1"
      manufacturerPartNumber="USB-C-16P"
      footprint="pinrow6"
      schSectionName="usb_pd"
      supplierPartNumbers={jlc("C165948")}
      pinLabels={{
        pin1: "VBUS_A",
        pin2: "VBUS_B",
        pin3: "GND_A",
        pin4: "GND_B",
        pin5: "CC1",
        pin6: "CC2",
      }}
      connections={{
        VBUS_A: "net.VBUS_RAW",
        VBUS_B: "net.VBUS_RAW",
        GND_A: "net.GND",
        GND_B: "net.GND",
        CC1: "net.CC1",
        CC2: "net.CC2",
      }}
    />
    <fuse
      name="F1"
      footprint="1206"
      schSectionName="usb_pd"
      supplierPartNumbers={jlc("C70076")}
      currentRating="3A"
      connections={{ pin1: "net.VBUS_RAW", pin2: "net.VBUS_PD" }}
    />
    <diode
      name="D1"
      footprint="sma"
      schSectionName="usb_pd"
      supplierPartNumbers={jlc("C138425")}
      connections={{ anode: "net.GND", cathode: "net.VBUS_PD" }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="1206"
      schSectionName="usb_pd"
      schX={-8.1}
      schY={-1.82}
      schOrientation="vertical"
      supplierPartNumbers={jlc("C13585")}
      connections={{ pin1: "net.VBUS_PD", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0603"
      schSectionName="usb_pd"
      schX={-4.05}
      schY={-3.01}
      schOrientation="vertical"
      supplierPartNumbers={jlc("C14663")}
      connections={{ pin1: "net.VBUS_PD", pin2: "net.GND" }}
    />
    <mosfet
      name="Q1"
      footprint="sot23"
      schSectionName="usb_pd"
      schX={-7.95}
      schY={-5.5}
      supplierPartNumbers={jlc("C8545")}
      channelType="p"
      mosfetMode="enhancement"
    />
    <trace from="Q1.drain" to="net.VBUS_PD" />
    <trace from="Q1.source" to="net.VLED_20V" />
    <trace from="Q1.gate" to="net.PD_OK" />
    <resistor
      name="R1"
      resistance="100k"
      footprint="0603"
      schSectionName="usb_pd"
      schX={-5.33}
      schY={-5.47}
      supplierPartNumbers={jlc("C25803")}
      connections={{ pin1: "net.PD_OK", pin2: "net.GND" }}
    />

    <Stusb4500
      name="U1"
      schSectionName="usb_pd"
      schX={-11.52}
      schY={-5.47}
      schHeight={2.435}
      connections={{
        CC1: "net.CC1",
        CC2: "net.CC2",
        VBUS_VS: "net.VBUS_PD",
        VBUS_VS_DISCH: "net.VBUS_PD",
        VBUS_EN_SNK: "net.PD_OK",
        POWER_OK2: "net.PD_OK",
        POWER_OK3: "net.LED_ENABLE",
        ATTACH: "net.PD_ATTACH",
        ALERT: "net.PD_ALERT",
        RESET: "net.PD_RESET",
        SDA: "net.I2C_SDA",
        SCL: "net.I2C_SCL",
        VSYS: "net.V3_3",
        VDD: "net.V3_3",
        VREG_1V2: "net.V1_2",
        VREG_2V7: "net.V2_7",
        ADDR0: "net.GND",
        ADDR1: "net.GND",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        EP: "net.GND",
      }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0603"
      schSectionName="usb_pd"
      supplierPartNumbers={jlc("C15849")}
      connections={{ pin1: "net.V1_2", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0603"
      schSectionName="usb_pd"
      supplierPartNumbers={jlc("C15849")}
      connections={{ pin1: "net.V2_7", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0603"
      schSectionName="usb_pd"
      supplierPartNumbers={jlc("C14663")}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <chip
      name="U2"
      footprint="sot23_5"
      schSectionName="logic"
      schX={-3.08}
      schY={-3.86}
      schHeight={0.6}
      manufacturerPartNumber="TLV75533PDBVR"
      supplierPartNumbers={jlc("C485517")}
      pinLabels={{
        pin1: "IN",
        pin2: "GND",
        pin3: "EN",
        pin4: "NC",
        pin5: "OUT",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["IN", "EN", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["OUT", "NC"] },
      }}
      connections={{
        IN: "net.VBUS_PD",
        EN: "net.VBUS_PD",
        OUT: "net.V3_3",
        GND: "net.GND",
      }}
    />
    <capacitor
      name="C6"
      capacitance="1uF"
      footprint="0603"
      schSectionName="logic"
      supplierPartNumbers={jlc("C15849")}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0603"
      schSectionName="logic"
      schX={-5.86}
      schY={-1.41}
      supplierPartNumbers={jlc("C23162")}
      connections={{ pin1: "net.V3_3", pin2: "net.I2C_SDA" }}
    />
    <resistor
      name="R3"
      resistance="4.7k"
      footprint="0603"
      schSectionName="logic"
      supplierPartNumbers={jlc("C23162")}
      connections={{ pin1: "net.V3_3", pin2: "net.I2C_SCL" }}
    />
    <pinheader
      name="J2"
      pinCount={8}
      pitch="2.54mm"
      footprint="pinrow8"
      schSectionName="logic"
      schX={-7.33}
      schY={-3.27}
      schWidth={1.15}
      pinLabels={[
        "V3_3",
        "GND",
        "I2C_SDA",
        "I2C_SCL",
        "PD_ALERT",
        "PD_RESET",
        "DIM_PWM",
        "DIM_ANALOG",
      ]}
      connections={{
        V3_3: "net.V3_3",
        GND: "net.GND",
        I2C_SDA: "net.I2C_SDA",
        I2C_SCL: "net.I2C_SCL",
        PD_ALERT: "net.PD_ALERT",
        PD_RESET: "net.PD_RESET",
        DIM_PWM: "net.DIM_PWM",
        DIM_ANALOG: "net.DIM_ANALOG",
      }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0603"
      schSectionName="logic"
      schX={-3.38}
      schY={-1.41}
      supplierPartNumbers={jlc("C25804")}
      connections={{ pin1: "net.V3_3", pin2: "net.PD_RESET" }}
    />
    <resistor
      name="R5"
      resistance="33k"
      footprint="0603"
      schSectionName="logic"
      schX={-5.98}
      schY={-6.15}
      supplierPartNumbers={jlc("C25819")}
      connections={{ pin1: "net.DIM_PWM", pin2: "net.DIM_ANALOG" }}
    />
    <capacitor
      name="C7"
      capacitance="220nF"
      footprint="0603"
      schSectionName="logic"
      schX={-4}
      schY={-6.32}
      schOrientation="vertical"
      supplierPartNumbers={jlc("C21120")}
      connections={{ pin1: "net.DIM_ANALOG", pin2: "net.GND" }}
    />

    <Lm3409
      name="U3"
      schSectionName="buck"
      connections={{
        VIN: "net.VLED_20V",
        VCC: "net.V3_3",
        EN: "net.LED_ENABLE",
        IADJ: "net.DIM_ANALOG",
        COFF: "net.COFF",
        GND: "net.GND",
        CSP: "net.SNS_P",
        CSN: "net.SNS_N",
        HG: "net.LED_SW",
        LDRV: "net.LED_SW",
      }}
    />
    <capacitor
      name="C8"
      capacitance="4.7uF"
      footprint="1206"
      schSectionName="buck"
      supplierPartNumbers={jlc("C96123")}
      connections={{ pin1: "net.VLED_20V", pin2: "net.GND" }}
    />
    <resistor
      name="R6"
      resistance="0.2"
      footprint="1206"
      schSectionName="buck"
      connections={{ pin1: "net.SNS_P", pin2: "net.SNS_N" }}
    />
    <mosfet
      name="Q2"
      footprint="sot23"
      schSectionName="buck"
      supplierPartNumbers={jlc("C8598")}
      channelType="p"
      mosfetMode="enhancement"
    />
    <trace from="Q2.gate" to="net.LED_SW" />
    <trace from="Q2.source" to="net.VLED_20V" />
    <trace from="Q2.drain" to="net.SNS_P" />
    <inductor
      name="L1"
      inductance="22uH"
      footprint="0805"
      schSectionName="buck"
      supplierPartNumbers={jlc("C169394")}
      connections={{ pin1: "net.SNS_N", pin2: "net.LED_ANODE" }}
    />
    <diode
      name="D2"
      footprint="sma"
      schSectionName="buck"
      supplierPartNumbers={jlc("C22452")}
      connections={{ anode: "net.GND", cathode: "net.SNS_N" }}
    />
    <capacitor
      name="C9"
      capacitance="1nF"
      footprint="0603"
      schSectionName="buck"
      supplierPartNumbers={jlc("C1588")}
      connections={{ pin1: "net.COFF", pin2: "net.GND" }}
    />
    <resistor
      name="R7"
      resistance="100k"
      footprint="0603"
      schSectionName="buck"
      supplierPartNumbers={jlc("C25803")}
      connections={{ pin1: "net.COFF", pin2: "net.LED_ANODE" }}
    />
    <capacitor
      name="C10"
      capacitance="10uF"
      footprint="1206"
      schSectionName="buck"
      schOrientation="vertical"
      supplierPartNumbers={jlc("C13585")}
      connections={{ pin1: "net.LED_ANODE", pin2: "net.LED_CATHODE" }}
    />

    <pinheader
      name="J3"
      pinCount={4}
      pitch="2.54mm"
      footprint="pinrow4"
      schSectionName="output"
      schWidth={0.77}
      pinLabels={["LED_A1", "LED_K1", "LED_A2", "LED_K2"]}
      connections={{
        LED_A1: "net.LED_ANODE",
        LED_K1: "net.LED_CATHODE",
        LED_A2: "net.LED_ANODE",
        LED_K2: "net.LED_CATHODE",
      }}
    />
    <led
      name="D3"
      footprint="led0603"
      color="white"
      schSectionName="output"
      schDisplayValue="Warm LED string"
      supplierPartNumbers={jlc("C965812")}
      connections={{ anode: "net.LED_ANODE", cathode: "net.LED_CATHODE" }}
    />
    <led
      name="D4"
      footprint="led0603"
      color="white"
      schSectionName="output"
      schX={17.852}
      schOrientation="vertical"
      schDisplayValue="Cool LED string"
      supplierPartNumbers={jlc("C965812")}
      connections={{ anode: "net.LED_ANODE", cathode: "net.LED_CATHODE" }}
    />
    <resistor
      name="R8"
      resistance="0"
      footprint="1206"
      schSectionName="output"
      schX={17.852}
      schY={-1.1}
      schOrientation="vertical"
      supplierPartNumbers={jlc("C17888")}
      connections={{ pin1: "net.LED_CATHODE", pin2: "net.GND" }}
    />
    <testpoint
      name="TP1"
      schSectionName="output"
      connections={{ pin1: "net.VLED_20V" }}
    />
    <testpoint
      name="TP2"
      schSectionName="output"
      connections={{ pin1: "net.LED_ANODE" }}
    />
    <testpoint
      name="TP3"
      schSectionName="output"
      connections={{ pin1: "net.DIM_ANALOG" }}
    />
  </board>
)
