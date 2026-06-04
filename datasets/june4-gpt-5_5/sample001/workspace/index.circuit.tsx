import { AP2112K_3_3TRG1 } from "./imports/AP2112K_3_3TRG1"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

export default () => (
  <board width="70mm" height="50mm" routingDisabled>
    <net name="VBUS" />
    <net name="V3V3" />
    <net name="DVDD" />
    <net name="GND" />
    <net name="USB_DP" />
    <net name="USB_DM" />
    <net name="XIN" />
    <net name="XOUT" />
    <net name="RUN" />
    <net name="BOOTSEL" />
    <net name="SWCLK" />
    <net name="SWDIO" />
    <net name="QSPI_SS" />
    <net name="QSPI_SCLK" />
    <net name="QSPI_SD0" />
    <net name="QSPI_SD1" />
    <net name="QSPI_SD2" />
    <net name="QSPI_SD3" />
    <net name="LED" />
    <net name="GP0" />
    <net name="GP1" />
    <net name="GP2" />
    <net name="GP3" />
    <net name="GP4" />
    <net name="GP5" />
    <net name="GP6" />
    <net name="GP7" />
    <net name="GP8" />
    <net name="GP9" />
    <net name="GP10" />
    <net name="GP11" />
    <net name="GP12" />
    <net name="GP13" />
    <net name="GP14" />
    <net name="GP15" />
    <net name="GP16" />
    <net name="GP17" />
    <net name="GP18" />
    <net name="GP19" />
    <net name="GP20" />
    <net name="GP21" />
    <net name="GP22" />
    <net name="GP26" />
    <net name="GP27" />
    <net name="GP28" />

    <schematicsection name="usb_power" displayName="USB and Power" />
    <schematicsection name="mcu" displayName="RP2040 MCU" />
    <schematicsection name="boot_flash" displayName="Boot Flash" />
    <schematicsection name="clock_reset" displayName="Clock, Reset, and Debug" />
    <schematicsection name="io" displayName="GPIO Headers" />

    <connector
      name="J1"
      schSectionName="usb_power"
      pcbX={-24}
      pcbY={0}
      footprint={
        <footprint>
          <smtpad portHints={["pin1"]} pcbX={0} pcbY={3} width="0.6mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin2"]} pcbX={0} pcbY={2} width="0.6mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin3"]} pcbX={0} pcbY={1} width="0.6mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin4"]} pcbX={0} pcbY={0} width="0.6mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin5"]} pcbX={0} pcbY={-1} width="0.6mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin6"]} pcbX={0} pcbY={-2} width="0.6mm" height="0.6mm" shape="rect" />
          <smtpad portHints={["pin7"]} pcbX={0} pcbY={-3} width="0.6mm" height="0.6mm" shape="rect" />
        </footprint>
      }
      schX={-15.1}
      schY={-2.783}
      schHeight={0.8}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DP",
        pin3: "DM",
        pin4: "CC1",
        pin5: "CC2",
        pin6: "GND",
        pin7: "SHLD",
      }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VBUS", "DP", "DM"] },
        rightSide: { direction: "top-to-bottom", pins: ["CC1", "CC2", "GND", "SHLD"] },
      }}
      connections={{
        VBUS: "net.VBUS",
        DP: "net.USB_DP",
        DM: "net.USB_DM",
        CC1: "R1.pin1",
        CC2: "R2.pin1",
        GND: "net.GND",
        SHLD: "net.GND",
      }}
    />
    <AP2112K_3_3TRG1
      name="U2"
      schSectionName="usb_power"
      pcbX={-16}
      pcbY={3}
      schX={-14.1}
      schY={-5.683}
      schHeight={0.6}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["VIN", "EN", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["VOUT", "NC"] },
      }}
      connections={{
        VIN: "net.VBUS",
        EN: "net.VBUS",
        GND: "net.GND",
        VOUT: "net.V3V3",
      }}
    />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      schSectionName="usb_power"
      pcbX={-19}
      pcbY={7}
      schX={-16.86}
      schY={-5.303}
      schRotation="90deg"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      schSectionName="usb_power"
      pcbX={-13}
      pcbY={7}
      schX={-14.89}
      schY={-8.103}
      schRotation="90deg"
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />
    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      schSectionName="usb_power"
      pcbX={-21}
      pcbY={-5}
      schX={-12.7}
      schY={-1.694}
      connections={{ pin1: "J1.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      schSectionName="usb_power"
      pcbX={-18}
      pcbY={-5}
      schX={-12.7}
      schY={-2.683}
      connections={{ pin1: "J1.CC2", pin2: "net.GND" }}
    />

    <RP2040
      name="U1"
      schSectionName="mcu"
      pcbX={0}
      pcbY={0}
      schX={-7.15}
      schY={-3.789}
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: [
            "IOVDD1",
            "IOVDD2",
            "IOVDD3",
            "IOVDD4",
            "IOVDD5",
            "IOVDD6",
            "USB_VDD",
            "ADC_AVDD",
            "VREG_IN",
          ],
        },
        bottomSide: { direction: "left-to-right", pins: ["DVDD1", "DVDD2", "VREG_VOUT", "GND"] },
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            "GPIO0",
            "GPIO1",
            "GPIO2",
            "GPIO3",
            "GPIO4",
            "GPIO5",
            "GPIO6",
            "GPIO7",
            "GPIO8",
            "GPIO9",
            "GPIO10",
            "GPIO11",
            "GPIO12",
            "GPIO13",
            "GPIO14",
            "GPIO15",
          ],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: [
            "GPIO16",
            "GPIO17",
            "GPIO18",
            "GPIO19",
            "GPIO20",
            "GPIO21",
            "GPIO22",
            "GPIO25",
            "GPIO26_ADC0",
            "GPIO27_ADC1",
            "GPIO28_ADC2",
            "GPIO29_ADC3",
            "USB_DP",
            "USB_DM",
            "XIN",
            "XOUT",
            "RUN",
            "SWCLK",
            "SWD",
            "TESTEN",
          ],
        },
      }}
      connections={{
        IOVDD1: "net.V3V3",
        IOVDD2: "net.V3V3",
        IOVDD3: "net.V3V3",
        IOVDD4: "net.V3V3",
        IOVDD5: "net.V3V3",
        IOVDD6: "net.V3V3",
        USB_VDD: "net.V3V3",
        ADC_AVDD: "net.V3V3",
        VREG_IN: "net.V3V3",
        DVDD1: "net.DVDD",
        DVDD2: "net.DVDD",
        VREG_VOUT: "net.DVDD",
        GND: "net.GND",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        RUN: "net.RUN",
        SWCLK: "net.SWCLK",
        SWD: "net.SWDIO",
        QSPI_SS: "net.QSPI_SS",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
        GPIO0: "net.GP0",
        GPIO1: "net.GP1",
        GPIO2: "net.GP2",
        GPIO3: "net.GP3",
        GPIO4: "net.GP4",
        GPIO5: "net.GP5",
        GPIO6: "net.GP6",
        GPIO7: "net.GP7",
        GPIO8: "net.GP8",
        GPIO9: "net.GP9",
        GPIO10: "net.GP10",
        GPIO11: "net.GP11",
        GPIO12: "net.GP12",
        GPIO13: "net.GP13",
        GPIO14: "net.GP14",
        GPIO15: "net.GP15",
        GPIO16: "net.GP16",
        GPIO17: "net.GP17",
        GPIO18: "net.GP18",
        GPIO19: "net.GP19",
        GPIO20: "net.GP20",
        GPIO21: "net.GP21",
        GPIO22: "net.GP22",
        GPIO25: "net.LED",
        GPIO26_ADC0: "net.GP26",
        GPIO27_ADC1: "net.GP27",
        GPIO28_ADC2: "net.GP28",
        TESTEN: "net.GND",
      }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      schSectionName="mcu"
      pcbX={-5}
      pcbY={7}
      schX={-6.5}
      schY={-7.914}
      schRotation="90deg"
      connections={{ pin1: "net.DVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      schSectionName="mcu"
      pcbX={-2}
      pcbY={7}
      schX={-3.99}
      schY={-4.964}
      schRotation="90deg"
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      schSectionName="mcu"
      pcbX={1}
      pcbY={7}
      schX={-3.99}
      schY={-7.004}
      schRotation="90deg"
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="330"
      footprint="0402"
      schSectionName="mcu"
      pcbX={6}
      pcbY={-7}
      schX={-3.99}
      schY={-3.15}
      connections={{ pin1: "net.V3V3", pin2: "net.LED" }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      schDisplayValue="USER"
      schSectionName="mcu"
      pcbX={9}
      pcbY={-7}
      schX={-1.67}
      schY={-5.335}
      connections={{ pin1: "net.LED", pin2: "net.GND" }}
    />

    <W25Q16JVUXIQ
      name="U3"
      schSectionName="boot_flash"
      pcbX={12}
      pcbY={4}
      schX={6.1}
      schY={-4.786}
      schHeight={1}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["CS", "pin2", "pin3", "GND"] },
        rightSide: { direction: "top-to-bottom", pins: ["VCC", "pin7", "CLK", "pin5", "EP"] },
      }}
      connections={{
        CS: "net.QSPI_SS",
        pin2: "net.QSPI_SD1",
        pin3: "net.QSPI_SD2",
        GND: "net.GND",
        pin5: "net.QSPI_SD0",
        CLK: "net.QSPI_SCLK",
        pin7: "net.QSPI_SD3",
        VCC: "net.V3V3",
        EP: "net.GND",
      }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      schSectionName="boot_flash"
      pcbX={16}
      pcbY={4}
      schX={6.1}
      schY={-7.306}
      schRotation="90deg"
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />
    <resistor
      name="R4"
      resistance="10k"
      footprint="0402"
      schSectionName="boot_flash"
      pcbX={12}
      pcbY={8}
      schX={5.733}
      schY={-2.492}
      connections={{ pin1: "net.QSPI_SS", pin2: "net.V3V3" }}
    />
    <pushbutton
      name="SW1"
      footprint="pushbutton_4mm"
      schSectionName="boot_flash"
      pcbX={18}
      pcbY={14}
      schX={3.395}
      schY={-4.793}
      connections={{
        pin1: "net.QSPI_SS",
        pin2: "net.GND",
        pin3: "net.QSPI_SS",
        pin4: "net.GND",
      }}
    />

    <X322512MSB4SI
      name="Y1"
      schSectionName="clock_reset"
      pcbX={12}
      pcbY={-4}
      schX={14.1}
      schY={-6.014}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["OSC1", "GND1"] },
        rightSide: { direction: "top-to-bottom", pins: ["OSC2", "GND2"] },
      }}
      connections={{
        OSC1: "net.XIN",
        OSC2: "net.XOUT",
        GND1: "net.GND",
        GND2: "net.GND",
      }}
    />
    <capacitor
      name="C7"
      capacitance="27pF"
      footprint="0402"
      schSectionName="clock_reset"
      pcbX={16}
      pcbY={-7}
      schX={11.34}
      schY={-6.329}
      schRotation="90deg"
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="27pF"
      footprint="0402"
      schSectionName="clock_reset"
      pcbX={16}
      pcbY={-4}
      schX={14.46}
      schY={-3.694}
      schRotation="90deg"
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      schSectionName="clock_reset"
      pcbX={20}
      pcbY={-5}
      schX={16.86}
      schY={-5.914}
      connections={{ pin1: "net.RUN", pin2: "net.V3V3" }}
    />
    <pushbutton
      name="SW2"
      footprint="pushbutton_4mm"
      schSectionName="clock_reset"
      pcbX={27}
      pcbY={-9}
      schX={16.715}
      schY={-4.295}
      connections={{
        pin1: "net.RUN",
        pin2: "net.GND",
        pin3: "net.RUN",
        pin4: "net.GND",
      }}
    />
    <pinheader
      name="J2"
      pinCount={3}
      schSectionName="clock_reset"
      pcbX={28}
      pcbY={14}
      schX={11.5}
      schY={-3.909}
      pinLabels={{ pin1: "SWCLK", pin2: "SWDIO", pin3: "GND" }}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["SWCLK", "SWDIO", "GND"] },
      }}
      connections={{ SWCLK: "net.SWCLK", SWDIO: "net.SWDIO", GND: "net.GND" }}
    />

    <pinheader
      name="J3"
      pinCount={16}
      schSectionName="io"
      pcbX={-15}
      pcbY={22}
      schX={-1.802}
      schY={-13.423}
      schWidth={0.58}
      pinLabels={{
        pin1: "V3V3",
        pin2: "GND",
        pin3: "GP0",
        pin4: "GP1",
        pin5: "GP2",
        pin6: "GP3",
        pin7: "GP4",
        pin8: "GP5",
        pin9: "GP6",
        pin10: "GP7",
        pin11: "GP8",
        pin12: "GP9",
        pin13: "GP10",
        pin14: "GP11",
        pin15: "GP12",
        pin16: "GP13",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["V3V3", "GND", "GP0", "GP1", "GP2", "GP3", "GP4", "GP5"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GP6", "GP7", "GP8", "GP9", "GP10", "GP11", "GP12", "GP13"],
        },
      }}
      connections={{
        V3V3: "net.V3V3",
        GND: "net.GND",
        GP0: "net.GP0",
        GP1: "net.GP1",
        GP2: "net.GP2",
        GP3: "net.GP3",
        GP4: "net.GP4",
        GP5: "net.GP5",
        GP6: "net.GP6",
        GP7: "net.GP7",
        GP8: "net.GP8",
        GP9: "net.GP9",
        GP10: "net.GP10",
        GP11: "net.GP11",
        GP12: "net.GP12",
        GP13: "net.GP13",
      }}
    />
    <pinheader
      name="J4"
      pinCount={16}
      schSectionName="io"
      pcbX={15}
      pcbY={-22}
      schX={1.552}
      schY={-16.628}
      schWidth={1.055}
      pinLabels={{
        pin1: "V3V3",
        pin2: "GND",
        pin3: "GP14",
        pin4: "GP15",
        pin5: "GP16",
        pin6: "GP17",
        pin7: "GP18",
        pin8: "GP19",
        pin9: "GP20",
        pin10: "GP21",
        pin11: "GP22",
        pin12: "GP26_ADC0",
        pin13: "GP27_ADC1",
        pin14: "GP28_ADC2",
        pin15: "RUN",
        pin16: "BOOTSEL",
      }}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["V3V3", "GND", "GP14", "GP15", "GP16", "GP17", "GP18", "GP19"],
        },
        rightSide: {
          direction: "top-to-bottom",
          pins: ["GP20", "GP21", "GP22", "GP26_ADC0", "GP27_ADC1", "GP28_ADC2", "RUN", "BOOTSEL"],
        },
      }}
      connections={{
        V3V3: "net.V3V3",
        GND: "net.GND",
        GP14: "net.GP14",
        GP15: "net.GP15",
        GP16: "net.GP16",
        GP17: "net.GP17",
        GP18: "net.GP18",
        GP19: "net.GP19",
        GP20: "net.GP20",
        GP21: "net.GP21",
        GP22: "net.GP22",
        GP26_ADC0: "net.GP26",
        GP27_ADC1: "net.GP27",
        GP28_ADC2: "net.GP28",
        RUN: "net.RUN",
        BOOTSEL: "net.BOOTSEL",
      }}
    />

    <trace from="J4.BOOTSEL" to="net.QSPI_SS" />
  </board>
)
