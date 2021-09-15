const Student = require('../SUT/classes/student')

/*
  Jest

  El principio FIRST

  F ast            <--  salida terminal
  I solated        <--- agregando beforeEach
  R epetible       <--- siempre dar el mismo valor
  S elf-validating <--- lenguaje de aserciones
  T imely          <--- permite probar escenarios tanto positivos como negativos
*/


describe('Student', () => {
  const student = new Student('Miles', 'Davis')

  it('Every student has a name and Lastname', () => {
    expect(student.name).toEqual('Miles')
    expect(student.lastName).toEqual('Davis')
  })
  
  it('Every student has a greet() method', () => {
    const testValue = student.greet()
    const expected = `Hello I'm ${student.name} ${student.lastName}`

    expect(testValue).toEqual(expected)
  })
  
  it('Can mark absence using markAbsence() method', () => {
    let isAbsence = false
    student.markAbsence(isAbsence)

    expect(student.isAbsence).toEqual(false)
    
    isAbsence = true
    student.markAbsence(isAbsence)

    expect(student.isAbsence).toEqual(true)
  })

  it('should can mark attendance by default except if isAbasence is set to true', () => {
    expect(student.canMarkAttendance()).toEqual(true)

    student.markAbsence(true)

    expect(student.canMarkAttendance()).toEqual(false)
  })

})
