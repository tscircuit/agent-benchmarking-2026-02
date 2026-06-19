export default () => (
  <board width="110mm" height="110mm" layers={2} routingDisabled>
    <net name="VBUS_RAW" />
    <net name="VBUS_PD" />
    <net name="VLED_IN" />
    <net name="SW" />
    <net name="LED_PLUS" />
    <net name="LED_MINUS" />
    <net name="ISENSE_HI" />
    <net name="ISENSE_LO" />
    <net name="IADJ" />
    <net name="PWM_DIM" />
    <net name="DIM_DAC" />
    <net name="CC1" />
    <net name="CC2" />
    <net name="SCL" />
    <net name="SDA" />
    <net name="ALERT" />
    <net name="ATTACH" />
    <net name="VBUS_EN_SNK" />
    <net name="V5_AUX" />
    <net name="V3_3" />
    <net name="THERM" />
    <net name="FRAME_SYNC" />
    <net name="SWDIO" />
    <net name="SWCLK" />
    <net name="GND" />

    <schematicsection name="usb_pd" displayName="USB-C PD Sink" />
    <schematicsection name="pd_power" displayName="Negotiated Power Path" />
    <schematicsection name="led_driver" displayName="LM3409 Constant-Current Buck" />
    <schematicsection name="dimming" displayName="Flicker-Free Dimming Control" />
    <schematicsection name="led_ring" displayName="Ring LED Load" />
    <schematicsection name="thermal" displayName="Thermal Foldback and Test" />

    <connector
      name="J1"
      footprint="pinrow5"
      schSectionName="usb_pd"
      schHeight={0.6}
      pinLabels={{
        pin1: "VBUS",
        pin2: "GND",
        pin3: "CC1",
        pin4: "CC2",
        pin5: "SHIELD",
      }}
      connections={{
        VBUS: "net.VBUS_RAW",
        GND: "net.GND",
        CC1: "net.CC1",
        CC2: "net.CC2",
        SHIELD: "net.GND",
      }}
    />

    <chip
      name="U1"
      footprint="qfn24"
      schSectionName="usb_pd"
      schX={-9.35}
      schY={-6.8}
      schHeight={3.215}
      supplierPartNumbers={{ jlcpcb: ["C2686772"] }}
      pinLabels={{
        pin1: "CC1DB",
        pin2: "CC1",
        pin3: "CC2",
        pin4: "CC2DB",
        pin5: "RESET",
        pin6: "ADDR0",
        pin7: "SDA",
        pin8: "SCL",
        pin9: "ALERT",
        pin10: "ATTACH",
        pin11: "GPIO",
        pin12: "VBUS_EN_SNK",
        pin13: "POWER_OK2",
        pin14: "POWER_OK3",
        pin15: "A_B_SIDE",
        pin16: "VREG_2V7",
        pin17: "VSYS",
        pin18: "VDD",
        pin19: "VREG_1V2",
        pin20: "GND",
        pin21: "DISCH",
        pin22: "VBUS_VS_DISCH",
        pin23: "VBUS_VS",
        pin24: "EP",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["CC1DB", "CC1", "CC2", "CC2DB", "SDA", "SCL", "ALERT", "ATTACH"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "VBUS_VS",
            "VBUS_VS_DISCH",
            "VBUS_EN_SNK",
            "VSYS",
            "VDD",
            "VREG_2V7",
            "VREG_1V2",
            "DISCH",
          ],
        },
        topSide: {
          direction: "left-to-right",
          pins: ["RESET", "ADDR0", "POWER_OK2", "POWER_OK3"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["A_B_SIDE", "GPIO", "GND", "EP"],
        },
      }}
      connections={{
        CC1: "net.CC1",
        CC2: "net.CC2",
        SDA: "net.SDA",
        SCL: "net.SCL",
        ALERT: "net.ALERT",
        ATTACH: "net.ATTACH",
        VBUS_EN_SNK: "net.VBUS_EN_SNK",
        VBUS_VS: "net.VBUS_RAW",
        VBUS_VS_DISCH: "net.VBUS_RAW",
        VSYS: "net.V5_AUX",
        VDD: "net.V3_3",
        RESET: "net.V3_3",
        ADDR0: "net.GND",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      schSectionName="usb_pd"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      schSectionName="usb_pd"
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V5_AUX", pin2: "net.GND" }}
    />
    <resistor
      name="R1"
      resistance="4.7k"
      footprint="0402"
      schSectionName="usb_pd"
      supplierPartNumbers={{ jlcpcb: ["C25900"] }}
      connections={{ pin1: "net.SDA", pin2: "net.V3_3" }}
    />
    <resistor
      name="R2"
      resistance="4.7k"
      footprint="0402"
      schSectionName="usb_pd"
      supplierPartNumbers={{ jlcpcb: ["C25900"] }}
      connections={{ pin1: "net.SCL", pin2: "net.V3_3" }}
    />
    <diode
      name="D1"
      footprint="sod323"
      schSectionName="usb_pd"
      schX={-5.6}
      schY={-7.02}
      supplierPartNumbers={{ jlcpcb: ["C282106"] }}
      connections={{ anode: "net.GND", cathode: "net.VBUS_RAW" }}
    />

    <fuse
      name="F1"
      footprint="1206"
      currentRating="3A"
      schSectionName="pd_power"
      supplierPartNumbers={{ jlcpcb: ["C70076"] }}
      connections={{ pin1: "net.VBUS_RAW", pin2: "net.VBUS_PD" }}
    />
    <chip
      name="Q1"
      footprint="sot23_6"
      schSectionName="pd_power"
      supplierPartNumbers={{ jlcpcb: ["C25513"] }}
      pinLabels={{
        pin1: "S1",
        pin2: "G1",
        pin3: "D1",
        pin4: "D2",
        pin5: "G2",
        pin6: "S2",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["S1", "G1", "D1"] },
        rightSide: { direction: "top-to-bottom", pins: ["D2", "G2", "S2"] },
      }}
      connections={{
        S1: "net.VBUS_PD",
        D1: "net.VLED_IN",
        D2: "net.VLED_IN",
        S2: "net.VBUS_PD",
        G1: "net.VBUS_EN_SNK",
        G2: "net.VBUS_EN_SNK",
      }}
    />
    <capacitor
      name="C3"
      capacitance="22uF"
      footprint="1210"
      schSectionName="pd_power"
      supplierPartNumbers={{ jlcpcb: ["C12891"] }}
      connections={{ pin1: "net.VLED_IN", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0603"
      schSectionName="pd_power"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      connections={{ pin1: "net.VLED_IN", pin2: "net.GND" }}
    />

    <chip
      name="U2"
      footprint="msop10"
      schSectionName="led_driver"
      schX={10.14}
      schY={-4.48}
      supplierPartNumbers={{ jlcpcb: ["C555443"] }}
      pinLabels={{
        pin1: "VIN",
        pin2: "VCC",
        pin3: "EN",
        pin4: "COFF",
        pin5: "GND",
        pin6: "IADJ",
        pin7: "CSN",
        pin8: "CSP",
        pin9: "PGATE",
        pin10: "UVLO",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VIN", "EN", "UVLO", "COFF", "IADJ"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["PGATE", "CSP", "CSN", "VCC", "GND"],
        },
      }}
      connections={{
        VIN: "net.VLED_IN",
        EN: "net.PWM_DIM",
        UVLO: "net.VBUS_PD",
        IADJ: "net.IADJ",
        PGATE: "net.SW",
        CSP: "net.ISENSE_HI",
        CSN: "net.ISENSE_LO",
        VCC: "net.V5_AUX",
        GND: "net.GND",
      }}
    />
    <chip
      name="Q2"
      footprint="soic8"
      schSectionName="led_driver"
      pinLabels={{
        pin1: "SOURCE",
        pin2: "GATE",
        pin3: "DRAIN",
        pin4: "DRAIN_TAB",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["SOURCE", "GATE"] },
        rightSide: { direction: "top-to-bottom", pins: ["DRAIN", "DRAIN_TAB"] },
      }}
      supplierPartNumbers={{ jlcpcb: ["C25991"] }}
      connections={{
        SOURCE: "net.VLED_IN",
        GATE: "net.SW",
        DRAIN: "net.LED_PLUS",
        DRAIN_TAB: "net.LED_PLUS",
      }}
    />
    <diode
      name="D2"
      footprint="sma"
      schSectionName="led_driver"
      schX={13.26}
      schY={-4.36}
      supplierPartNumbers={{ jlcpcb: ["C22452"] }}
      connections={{ anode: "net.GND", cathode: "net.LED_PLUS" }}
    />
    <inductor
      name="L1"
      inductance="47uH"
      footprint="1210"
      schSectionName="led_driver"
      supplierPartNumbers={{ jlcpcb: ["C408354"] }}
      connections={{ pin1: "net.LED_PLUS", pin2: "net.ISENSE_HI" }}
    />
    <resistor
      name="R3"
      resistance="0.2"
      footprint="1206"
      schSectionName="led_driver"
      supplierPartNumbers={{ jlcpcb: ["C25344"] }}
      connections={{ pin1: "net.ISENSE_HI", pin2: "net.ISENSE_LO" }}
    />
    <resistor
      name="R4"
      resistance="301k"
      footprint="0603"
      schSectionName="led_driver"
      supplierPartNumbers={{ jlcpcb: ["C22985"] }}
      connections={{ pin1: "net.VBUS_PD", pin2: "U2.UVLO" }}
    />
    <resistor
      name="R5"
      resistance="20k"
      footprint="0603"
      schSectionName="led_driver"
      supplierPartNumbers={{ jlcpcb: ["C4184"] }}
      connections={{ pin1: "U2.UVLO", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="470pF"
      footprint="0402"
      schSectionName="led_driver"
      supplierPartNumbers={{ jlcpcb: ["C1533"] }}
      connections={{ pin1: "U2.COFF", pin2: "net.GND" }}
    />

    <chip
      name="U3"
      footprint="qfn32"
      schSectionName="dimming"
      supplierPartNumbers={{ jlcpcb: ["C529356"] }}
      pinLabels={{
        pin1: "VDD",
        pin2: "VSS",
        pin3: "SDA",
        pin4: "SCL",
        pin5: "PD_ALERT",
        pin6: "PD_ATTACH",
        pin7: "PWM_DIM",
        pin8: "DIM_DAC",
        pin9: "FRAME_SYNC",
        pin10: "THERM_ADC",
        pin11: "ENC_A",
        pin12: "ENC_B",
        pin13: "SWDIO",
        pin14: "SWCLK",
        pin15: "NRST",
        pin16: "BOOT0",
        pin17: "GPIO1",
        pin18: "GPIO2",
        pin19: "GPIO3",
        pin20: "GPIO4",
        pin21: "GPIO5",
        pin22: "GPIO6",
        pin23: "GPIO7",
        pin24: "GPIO8",
        pin25: "GPIO9",
        pin26: "GPIO10",
        pin27: "GPIO11",
        pin28: "GPIO12",
        pin29: "GPIO13",
        pin30: "GPIO14",
        pin31: "GPIO15",
        pin32: "GPIO16",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VDD", "VSS", "SDA", "SCL", "PD_ALERT", "PD_ATTACH", "FRAME_SYNC", "THERM_ADC"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["PWM_DIM", "DIM_DAC", "ENC_A", "ENC_B", "SWDIO", "SWCLK", "NRST", "BOOT0"],
        },
      }}
      connections={{
        VDD: "net.V3_3",
        VSS: "net.GND",
        SDA: "net.SDA",
        SCL: "net.SCL",
        PD_ALERT: "net.ALERT",
        PD_ATTACH: "net.ATTACH",
        PWM_DIM: "net.PWM_DIM",
        DIM_DAC: "net.DIM_DAC",
        FRAME_SYNC: "net.FRAME_SYNC",
        THERM_ADC: "net.THERM",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
      }}
    />
    <resistor
      name="R6"
      resistance="10k"
      footprint="0603"
      schSectionName="dimming"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      connections={{ pin1: "net.DIM_DAC", pin2: "net.IADJ" }}
    />
    <capacitor
      name="C6"
      capacitance="2.2uF"
      footprint="0603"
      schSectionName="dimming"
      supplierPartNumbers={{ jlcpcb: ["C23630"] }}
      connections={{ pin1: "net.IADJ", pin2: "net.GND" }}
    />
    <resistor
      name="R7"
      resistance="100k"
      footprint="0603"
      schSectionName="dimming"
      supplierPartNumbers={{ jlcpcb: ["C25803"] }}
      connections={{ pin1: "net.IADJ", pin2: "net.V3_3" }}
    />
    <connector
      name="J2"
      footprint="pinrow3"
      schSectionName="dimming"
      schHeight={0.4}
      pinLabels={{ pin1: "SYNC", pin2: "V3_3", pin3: "GND" }}
      connections={{ SYNC: "net.FRAME_SYNC", V3_3: "net.V3_3", GND: "net.GND" }}
    />
    <potentiometer
      name="RV1"
      maxResistance="10k"
      footprint="potentiometer_tht"
      schSectionName="dimming"
      supplierPartNumbers={{ jlcpcb: ["C124391"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.DIM_DAC", pin3: "net.GND" }}
    />

    <connector
      name="J3"
      footprint="pinrow2"
      schSectionName="led_ring"
      pinLabels={{ pin1: "LED_POS", pin2: "LED_NEG" }}
      connections={{ LED_POS: "net.ISENSE_LO", LED_NEG: "net.LED_MINUS" }}
    />
    <led
      name="D3"
      color="warmwhite"
      footprint="led0603"
      schSectionName="led_ring"
      supplierPartNumbers={{ jlcpcb: ["C965814"] }}
      connections={{ anode: "net.ISENSE_LO", cathode: "net.LED_MINUS" }}
    />
    <connector
      name="TP1"
      footprint="pinrow1"
      schSectionName="led_ring"
      pinLabels={{ pin1: "TP" }}
      connections={{ TP: "net.ISENSE_LO" }}
    />
    <connector
      name="TP2"
      footprint="pinrow1"
      schSectionName="led_ring"
      pinLabels={{ pin1: "TP" }}
      connections={{ TP: "net.LED_MINUS" }}
    />

    <chip
      name="RT1"
      footprint="0603"
      schSectionName="thermal"
      supplierPartNumbers={{ jlcpcb: ["C913012"] }}
      pinLabels={{ pin1: "A", pin2: "B" }}
      connections={{ A: "net.THERM", B: "net.GND" }}
    />
    <resistor
      name="R9"
      resistance="10k"
      footprint="0603"
      schSectionName="thermal"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.THERM" }}
    />
    <connector
      name="J4"
      footprint="pinrow4"
      schSectionName="thermal"
      pinLabels={{ pin1: "V3_3", pin2: "SWDIO", pin3: "SWCLK", pin4: "GND" }}
      connections={{
        V3_3: "net.V3_3",
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
        GND: "net.GND",
      }}
    />
  </board>
)
