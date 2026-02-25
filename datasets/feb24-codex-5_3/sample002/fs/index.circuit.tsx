export default () => (
  <board width="60mm" height="35mm" routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn64_w10mm_h10mm_p0.5mm_pw0.25mm_pl0.875mm"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      connections={{
        pin1: "net.GPIO0",
        pin2: "net.GPIO1",
        pin3: "net.GND",
        pin4: "net.GPIO2",
        pin5: "net.GPIO3",
        pin7: "net.GPIO4",
        pin8: "net.GPIO5",
        pin42: "net.GND",
        pin43: "net.V3_3",
        pin44: "net.ADC_VREF",
        pin46: "net.RUN",
        pin52: "net.USB_DP",
        pin53: "net.USB_DN",
      }}
    />

    <chip
      name="USBC"
      manufacturerPartNumber="USB-C-Receptacle"
      footprint="dip6_w7.62mm_p2.54mm_id1mm_od1.5mm"
      pcbX={-24}
      pcbY={0}
      pcbRotation={90}
      schX={-8}
      schY={0}
      pinLabels={{
        pin1: "VBUS",
        pin2: "USB_DN",
        pin3: "USB_DP",
        pin4: "CC1",
        pin5: "CC2",
        pin6: "GND",
      }}
      connections={{
        pin1: "net.VBUS",
        pin2: "net.USB_DN",
        pin3: "net.USB_DP",
        pin4: "net.CC1",
        pin5: "net.CC2",
        pin6: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      pcbX={11}
      pcbY={11}
      schX={8}
      schY={2}
      connections={{ pin1: "net.GPIO25", pin2: "net.LED_ANODE" }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={18}
      pcbY={11}
      schX={11}
      schY={2}
      connections={{ pos: "net.LED_ANODE", neg: "net.GND" }}
    />

    <pinheader
      name="J1"
      pinCount={8}
      pcbX={24}
      pcbY={9}
      schX={12}
      schY={-6}
      showSilkscreenPinLabels
      pinLabels={["V3_3", "GND", "GPIO0", "GPIO1", "GPIO2", "GPIO3", "GPIO4", "GPIO5"]}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
        pin3: "net.GPIO0",
        pin4: "net.GPIO1",
        pin5: "net.GPIO2",
        pin6: "net.GPIO3",
        pin7: "net.GPIO4",
        pin8: "net.GPIO5",
      }}
    />

    <pinheader
      name="J2"
      pinCount={8}
      pcbX={24}
      pcbY={-9}
      schX={12}
      schY={-14}
      showSilkscreenPinLabels
      pinLabels={["VBUS", "GND", "RUN", "ADC_VREF", "USB_DP", "USB_DN", "GPIO25", "NC"]}
      connections={{
        pin1: "net.VBUS",
        pin2: "net.GND",
        pin3: "net.RUN",
        pin4: "net.ADC_VREF",
        pin5: "net.USB_DP",
        pin6: "net.USB_DN",
        pin7: "net.GPIO25",
        pin8: "net.NC",
      }}
    />
  </board>
)