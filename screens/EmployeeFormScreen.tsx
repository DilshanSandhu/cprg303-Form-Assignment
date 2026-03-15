import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { employeeSchema } from "@/validation/schemas";

export default function EmployeeFormScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Employee Form</Text>
        <Text style={styles.subtitle}>Enter employee information below</Text>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            position: "",
            employeeId: "",
          }}
          validationSchema={employeeSchema}
          validateOnMount={true}
          onSubmit={(values, { resetForm }) => {
            Alert.alert("Success", "Employee information submitted successfully!");
            console.log(values);
            resetForm();
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter full name"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("fullName")}
                value={values.fullName}
                onBlur={handleBlur("fullName")}
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.error}>{errors.fullName}</Text>
              )}

              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("email")}
                value={values.email}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("phoneNumber")}
                value={values.phoneNumber}
                onBlur={handleBlur("phoneNumber")}
                keyboardType="phone-pad"
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
              )}

              <Text style={styles.label}>Position</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter position"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("position")}
                value={values.position}
                onBlur={handleBlur("position")}
              />
              {touched.position && errors.position && (
                <Text style={styles.error}>{errors.position}</Text>
              )}

              <Text style={styles.label}>Employee ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter employee ID"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange("employeeId")}
                value={values.employeeId}
                onBlur={handleBlur("employeeId")}
              />
              {touched.employeeId && errors.employeeId && (
                <Text style={styles.error}>{errors.employeeId}</Text>
              )}

              <TouchableOpacity
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f3f4f6",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#111827",
    marginBottom: 8,
  },
  error: {
    color: "#dc2626",
    fontSize: 13,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: "#93c5fd",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
});