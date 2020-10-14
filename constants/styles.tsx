import { StyleSheet } from "react-native";

export const COLORS = {
  accentColor: "#1976D2",
  textOnAccentColor: "#fff",
};

export const BTN_STYLE = StyleSheet.create({
  ACCENT_BUTTON: {
    height: 48,
    backgroundColor: COLORS.accentColor,
    borderRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
  ACCENT_DENGER_BUTTON: {
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
    borderRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ACCENT_WARNING_BUTTON: {
    backgroundColor: "#ffc107",
    borderColor: "#ffc107",
    borderRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ACCENT_ADD_ITEM_BUTTON: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
