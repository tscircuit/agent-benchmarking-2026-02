import "tscircuit"

export default () => (
  <board width="85mm" height="55mm" layers={2} routingDisabled schAutoLayoutEnabled>
    <net name="GND" />
    <net name="VBUS_RAW" />
    <net name="VBUS_PD" />
    <net name="USB_CC1" />
    <net name="USB_CC2" />
    <net name="PD_CC1DB" />
    <net name="PD_CC2DB" />
    <net name="PD_RESET" />
    <net name="PD_SCL" />
    <net name="PD_SDA" />
    <net name="PD_ALERT" />
    <net name="PD_ATTACH" />
    <net name="PD_POWER_OK2" />
    <net name="PD_POWER_OK3" />
    <net name="PD_GPIO" />
    <net name="PD_VBUS_EN_N" />
    <net name="PD_DISCH" />
    <net name="PD_AB_SIDE" />
    <net name="PD_VREG_1V2" />
    <net name="PD_VREG_2V7" />
    <net name="PD_ADDR0" />
    <net name="PD_ADDR1" />
    <net name="VCC_5V" />
    <net name="VCC_3V3" />
    <net name="LED_SW" />
    <net name="LED_OUT_P" />
    <net name="LED_OUT_N" />
    <net name="LED_GATE" />
    <net name="LM_VCC" />
    <net name="LM_COFF" />
    <net name="LM_UVLO" />
    <net name="LM_IADJ" />
    <net name="DIM_PWM" />
    <net name="DIM_ANALOG" />
    <net name="PWM_FILTER" />
    <net name="THERM_NTC" />

    <schematicsection name="usb_pd" displayName="USB-C PD Sink" />
    <schematicsection name="power_path" displayName="VBUS Power Path" />
    <schematicsection name="led_driver" displayName="LM3409 LED Driver" />
    <schematicsection name="dimming" displayName="Flicker-Free Dimming" />
    <schematicsection name="io" displayName="Ring Light I/O" />

    <connector
      name="J1"
      schX="-16.47"
      schY="-10.15"
      schWidth={1.2}
      manufacturerPartNumber="USB-C-SINK-SCHEMATIC"
      footprint="pinrow6"
      schSectionName="usb_pd"
      pinLabels={{
        pin1: "VBUS_A",
        pin2: "VBUS_B",
        pin3: "GND_A",
        pin4: "GND_B",
        pin5: "CC1",
        pin6: "CC2",
      }}
      connections={{
        pin1: "net.VBUS_RAW",
        pin2: "net.VBUS_RAW",
        pin3: "net.GND",
        pin4: "net.GND",
        pin5: "net.USB_CC1",
        pin6: "net.USB_CC2",
      }}
    />

    <chip
      name="U1"
      schX="-11.73"
      schY="-6.05"
      schHeight={2.2}
      manufacturerPartNumber="STUSB4500QTR"
      footprint="qfn24"
      schSectionName="usb_pd"
      pinLabels={{
        pin1: "CC1DB",
        pin2: "CC1",
        pin3: "NC",
        pin4: "CC2",
        pin5: "CC2DB",
        pin6: "RESET",
        pin7: "SCL",
        pin8: "SDA",
        pin9: "DISCH",
        pin10: "GND",
        pin11: "ATTACH",
        pin12: "ADDR0",
        pin13: "ADDR1",
        pin14: "POWER_OK3",
        pin15: "GPIO",
        pin16: "VBUS_EN_SNK",
        pin17: "A_B_SIDE",
        pin18: "VBUS_VS_DISCH",
        pin19: "ALERT",
        pin20: "POWER_OK2",
        pin21: "VREG_1V2",
        pin22: "VSYS",
        pin23: "VREG_2V7",
        pin24: "VDD",
        pin25: "EP",
      }}
      pinAttributes={{
        VDD: { requiresPower: true },
        VSYS: { requiresPower: true },
        VREG_1V2: { providesPower: true },
        VREG_2V7: { providesPower: true },
        VBUS_EN_SNK: { mustBeConnected: true },
        CC1: { mustBeConnected: true },
        CC2: { mustBeConnected: true },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "CC1",
            "CC1DB",
            "CC2",
            "CC2DB",
            "RESET",
            "SCL",
            "SDA",
            "ALERT",
            "ATTACH",
            "A_B_SIDE",
            "ADDR0",
            "ADDR1",
            "GND",
            "EP",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "VDD",
            "VBUS_VS_DISCH",
            "VBUS_EN_SNK",
            "POWER_OK2",
            "POWER_OK3",
            "GPIO",
            "DISCH",
            "VREG_2V7",
            "VREG_1V2",
            "VSYS",
          ],
        },
      }}
      connections={{
        CC1: "net.USB_CC1",
        CC1DB: "net.PD_CC1DB",
        CC2: "net.USB_CC2",
        CC2DB: "net.PD_CC2DB",
        RESET: "net.PD_RESET",
        SCL: "net.PD_SCL",
        SDA: "net.PD_SDA",
        ALERT: "net.PD_ALERT",
        DISCH: "net.PD_DISCH",
        ATTACH: "net.PD_ATTACH",
        ADDR0: "net.PD_ADDR0",
        ADDR1: "net.PD_ADDR1",
        POWER_OK2: "net.PD_POWER_OK2",
        POWER_OK3: "net.PD_POWER_OK3",
        GPIO: "net.PD_GPIO",
        VBUS_EN_SNK: "net.PD_VBUS_EN_N",
        A_B_SIDE: "net.PD_AB_SIDE",
        VBUS_VS_DISCH: "net.VBUS_RAW",
        VREG_1V2: "net.PD_VREG_1V2",
        VSYS: "net.GND",
        VREG_2V7: "net.PD_VREG_2V7",
        VDD: "net.VBUS_RAW",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />

    <resistor
      name="R1"
      schX="-16.45"
      schY="-6.173"
      resistance="0"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.USB_CC1", pin2: "net.PD_CC1DB" }}
    />
    <resistor
      name="R2"
      schX="-15.368"
      schY="-4.194"
      resistance="0"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.USB_CC2", pin2: "net.PD_CC2DB" }}
    />
    <resistor
      name="R3"
      schX="-12.4"
      schY="-9.307"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_RESET", pin2: "net.GND" }}
    />
    <resistor
      name="R4"
      schX="-10.02"
      schY="-9.307"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_ADDR0", pin2: "net.GND" }}
    />
    <resistor
      name="R5"
      schX="-12.413"
      schY="-11.617"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_ADDR1", pin2: "net.GND" }}
    />
    <resistor
      name="R6"
      schX="-13.3"
      schY="-2.792"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_SCL", pin2: "net.VCC_3V3" }}
    />
    <resistor
      name="R7"
      schX="-11.16"
      schY="-2.792"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_SDA", pin2: "net.VCC_3V3" }}
    />
    <resistor
      name="R8"
      schX="-15.202"
      schY="-2.05"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_ALERT", pin2: "net.VCC_3V3" }}
    />
    <resistor
      name="R9"
      schX="-17.512"
      schY="-3.458"
      resistance="10k"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_ATTACH", pin2: "net.VCC_3V3" }}
    />
    <capacitor
      name="C1"
      schX="-8.31"
      schY="-7"
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_VREG_1V2", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      schX="-7.65"
      schY="-9.312"
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.PD_VREG_2V7", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      schX="-8.17"
      schY="-4.692"
      schOrientation="vertical"
      capacitance="100nF"
      footprint="0402"
      schSectionName="usb_pd"
      connections={{ pin1: "net.VBUS_RAW", pin2: "net.GND" }}
    />
    <resistor
      name="R10"
      schX="-9.266"
      schY="-2.382"
      resistance="1k"
      footprint="0603"
      schSectionName="usb_pd"
      connections={{ pin1: "net.VBUS_RAW", pin2: "net.PD_DISCH" }}
    />

    <chip
      name="Q1"
      schX="-1.216"
      schY="-5.819"
      schHeight={0.4}
      manufacturerPartNumber="AO3401A"
      footprint="sot23"
      schSectionName="power_path"
      pinLabels={{ pin1: "G", pin2: "S", pin3: "D" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["S", "G"] },
        rightSide: { direction: "top-to-bottom", pins: ["D"] },
      }}
      connections={{ S: "net.VBUS_RAW", G: "net.PD_VBUS_EN_N", D: "net.VBUS_PD" }}
    />
    <resistor
      name="R11"
      schX="-3.811"
      schY="-5.819"
      resistance="100k"
      footprint="0402"
      schSectionName="power_path"
      connections={{ pin1: "net.VBUS_RAW", pin2: "net.PD_VBUS_EN_N" }}
    />
    <fuse
      name="F1"
      schX="1.554"
      schY="-5.859"
      currentRating="3A"
      footprint="1206"
      schSectionName="power_path"
      connections={{ pin1: "net.VBUS_PD", pin2: "net.VCC_5V" }}
    />
    <capacitor
      name="C4"
      schX="2.084"
      schY="-7.849"
      schOrientation="vertical"
      capacitance="47uF"
      footprint="1210"
      schSectionName="power_path"
      connections={{ pin1: "net.VCC_5V", pin2: "net.GND" }}
    />

    <chip
      name="U2"
      schX="10.263"
      schY="-6.831"
      schHeight={1}
      manufacturerPartNumber="LM3409MY/NOPB"
      footprint="msop10"
      schSectionName="led_driver"
      pinLabels={{
        pin1: "UVLO",
        pin2: "IADJ",
        pin3: "EN",
        pin4: "COFF",
        pin5: "GND",
        pin6: "PGATE",
        pin7: "CSN",
        pin8: "CSP",
        pin9: "VCC",
        pin10: "VIN",
        pin11: "DAP",
      }}
      pinAttributes={{
        VIN: { requiresPower: true },
        VCC: { providesPower: true },
        PGATE: { mustBeConnected: true },
        CSP: { mustBeConnected: true },
        CSN: { mustBeConnected: true },
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VIN", "UVLO", "IADJ", "EN", "COFF", "GND", "DAP"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["PGATE", "CSP", "CSN", "VCC"],
        },
      }}
      connections={{
        VIN: "net.VCC_5V",
        UVLO: "net.LM_UVLO",
        IADJ: "net.LM_IADJ",
        EN: "net.DIM_PWM",
        COFF: "net.LM_COFF",
        GND: "net.GND",
        PGATE: "net.LED_GATE",
        CSN: "net.LED_OUT_P",
        CSP: "net.VCC_5V",
        VCC: "net.LM_VCC",
        DAP: "net.GND",
      }}
    />
    <chip
      name="Q2"
      schX="13.673"
      schY="-6.631"
      schHeight={0.4}
      manufacturerPartNumber="DMP3098L"
      footprint="sot23"
      schSectionName="led_driver"
      pinLabels={{ pin1: "G", pin2: "S", pin3: "D" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["S", "G"] },
        rightSide: { direction: "top-to-bottom", pins: ["D"] },
      }}
      connections={{ S: "net.VCC_5V", G: "net.LED_GATE", D: "net.LED_SW" }}
    />
    <resistor
      name="R12"
      schX="12.652"
      schY="-9.086"
      resistance="0.15"
      footprint="1206"
      schSectionName="led_driver"
      connections={{ pin1: "net.VCC_5V", pin2: "net.LED_OUT_P" }}
    />
    <inductor
      name="L1"
      schX="14.822"
      schY="-8.761"
      inductance="22uH"
      footprint="1210"
      schSectionName="led_driver"
      connections={{ pin1: "net.LED_SW", pin2: "net.LED_OUT_P" }}
    />
    <diode
      name="D1"
      schX="10.98"
      schY="-9.561"
      schRotation={180}
      footprint="sma"
      schSectionName="led_driver"
      connections={{ anode: "net.GND", cathode: "net.LED_SW" }}
    />
    <capacitor
      name="C5"
      schX="13.28"
      schY="-4.176"
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0603"
      schSectionName="led_driver"
      connections={{ pin1: "net.LM_VCC", pin2: "net.VCC_5V" }}
    />
    <resistor
      name="R13"
      schX="10.08"
      schY="-4.076"
      resistance="165k"
      footprint="0402"
      schSectionName="led_driver"
      connections={{ pin1: "net.VCC_5V", pin2: "net.LM_UVLO" }}
    />
    <resistor
      name="R14"
      schX="8.87"
      schY="-9.591"
      resistance="20k"
      footprint="0402"
      schSectionName="led_driver"
      connections={{ pin1: "net.LM_UVLO", pin2: "net.GND" }}
    />
    <resistor
      name="R15"
      schX="7.303"
      schY="-7.057"
      resistance="100k"
      footprint="0402"
      schSectionName="led_driver"
      connections={{ pin1: "net.LED_OUT_P", pin2: "net.LM_COFF" }}
    />
    <capacitor
      name="C6"
      schX="6.8"
      schY="-9.202"
      schOrientation="vertical"
      capacitance="1nF"
      footprint="0402"
      schSectionName="led_driver"
      connections={{ pin1: "net.LM_COFF", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      schX="17.157"
      schY="-8.104"
      schOrientation="vertical"
      capacitance="10uF"
      footprint="0805"
      schSectionName="led_driver"
      connections={{ pin1: "net.LED_OUT_P", pin2: "net.LED_OUT_N" }}
    />

    <pinheader
      name="J2"
      schX="-3.607"
      schY="-20.461"
      schWidth={1.15}
      pinCount={6}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow6"
      schSectionName="dimming"
      pinLabels={["3V3", "GND", "SCL", "SDA", "PWM", "ANALOG_DIM"]}
      connections={{
        pin1: "net.VCC_3V3",
        pin2: "net.GND",
        pin3: "net.PD_SCL",
        pin4: "net.PD_SDA",
        pin5: "net.DIM_PWM",
        pin6: "net.DIM_ANALOG",
      }}
    />
    <resistor
      name="R16"
      schX="-0.397"
      schY="-20.961"
      resistance="100k"
      footprint="0402"
      schSectionName="dimming"
      connections={{ pin1: "net.DIM_ANALOG", pin2: "net.PWM_FILTER" }}
    />
    <capacitor
      name="C8"
      schX="-0.532"
      schY="-18.817"
      schOrientation="vertical"
      capacitance="1uF"
      footprint="0402"
      schSectionName="dimming"
      connections={{ pin1: "net.PWM_FILTER", pin2: "net.GND" }}
    />
    <resistor
      name="R17"
      schX="0.36"
      schY="-16.673"
      resistance="10k"
      footprint="0402"
      schSectionName="dimming"
      connections={{ pin1: "net.PWM_FILTER", pin2: "net.LM_IADJ" }}
    />
    <resistor
      name="R18"
      schX="1.55"
      schY="-18.82"
      resistance="24.9k"
      footprint="0402"
      schSectionName="dimming"
      connections={{ pin1: "net.LM_IADJ", pin2: "net.GND" }}
    />
    <resistor
      name="R19"
      schX="-2.4"
      schY="-17.606"
      resistance="100k"
      footprint="0402"
      schSectionName="dimming"
      connections={{ pin1: "net.DIM_PWM", pin2: "net.VCC_3V3" }}
    />
    <resistor
      name="R20"
      schX="-4.66"
      schY="-17.606"
      resistance="10k"
      footprint="0402"
      schSectionName="dimming"
      connections={{ pin1: "net.VCC_3V3", pin2: "net.THERM_NTC" }}
    />
    <resistor
      name="RT1"
      schX="-6.247"
      schY="-19.911"
      resistance="100k"
      footprint="0603"
      schSectionName="dimming"
      connections={{ pin1: "net.THERM_NTC", pin2: "net.GND" }}
    />

    <pinheader
      name="J3"
      schX="3.68"
      schY="-19.37"
      schWidth={0.865}
      pinCount={4}
      gender="female"
      pitch="2.54mm"
      footprint="pinrow4"
      schSectionName="io"
      pinLabels={["LED_POS", "LED_NEG", "NTC", "GND"]}
      connections={{
        pin1: "net.LED_OUT_P",
        pin2: "net.LED_OUT_N",
        pin3: "net.THERM_NTC",
        pin4: "net.GND",
      }}
    />
    <resistor
      name="R21"
      schX="6.191"
      schY="-16.717"
      resistance="0"
      footprint="0805"
      schSectionName="io"
      connections={{ pin1: "net.LED_OUT_N", pin2: "net.GND" }}
    />
    <testpoint
      name="TP1"
      schX="6.191"
      schY="-18.572"
      schSectionName="io"
      connections={{ pin1: "net.VBUS_RAW" }}
    />
    <testpoint
      name="TP2"
      schX="6.191"
      schY="-19.972"
      schSectionName="io"
      connections={{ pin1: "net.VBUS_PD" }}
    />
    <testpoint
      name="TP3"
      schX="6.191"
      schY="-21.372"
      schSectionName="io"
      connections={{ pin1: "net.LED_OUT_P" }}
    />
  </board>
)
