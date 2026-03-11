import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";

import { Formik } from "formik";
import { employeeSchema } from "@/validation/schemas";

export default function EmployeeFormScreen() {
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Employee Form</Text>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          position: "",
          employeeId: "",
        }}
        validationSchema={employeeSchema}
        onSubmit={(values, { resetForm }) => {
          Alert.alert("Success", "Employee information submitted successfully!");
          console.log(values);
          resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
        <View>
          <TextInput 
          style= {styles.input}
          placeholder="Full Name"
          placeholderTextColor="gray"
          onChangeText={handleChange("fullName")}
          value={values.fullName}
          onBlur={handleBlur("fullName")}
          />
          {touched.fullName && errors.fullName && (<Text style={styles.error}>{errors.fullName}</Text>)}

          <TextInput
          style= {styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
          onChangeText={handleChange("email")}
          value={values.email}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
          />
          {touched.email && errors.email && (<Text style={styles.error}>{errors.email}</Text>)}
          
          <TextInput
          style= {styles.input}
          placeholder="Phone Number"
          placeholderTextColor="gray"
          onChangeText={handleChange("phoneNumber")}
          value={values.phoneNumber}
          onBlur={handleBlur("phoneNumber")}
          keyboardType="phone-pad"
          />
          {touched.phoneNumber && errors.phoneNumber && (<Text style={styles.error}>{errors.phoneNumber}</Text>)}
          
          <TextInput
          style= {styles.input}
          placeholder="Position"
          placeholderTextColor="gray"
          onChangeText={handleChange("position")}
          value={values.position}
          onBlur={handleBlur("position")}
          />
          {touched.position && errors.position && (<Text style={styles.error}>{errors.position}</Text>)}
          
          <TextInput
          style= {styles.input}
          placeholder="Employee ID"
          placeholderTextColor="gray"
          onChangeText={handleChange("employeeId")}
          value={values.employeeId}
          onBlur={handleBlur("employeeId")}
          />
          {touched.employeeId && errors.employeeId && (<Text style={styles.error}>{errors.employeeId}</Text>)}

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },

   error: {
    color: "red",
    marginBottom: 10,
    fontSize: 13,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  
  buttonDisabled: {
    backgroundColor: "#9dbcf7",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
  