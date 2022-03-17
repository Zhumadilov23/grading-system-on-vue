Vue.createApp({
    data: () => ({
        w1: 20,
        w2: 40,
        w3: 60,
        w4: 80,
        dateTime: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
,
        saveBtn: false,
        q1Open: false,
        q2Open: false,
        q3Open: false,
        q4Open: false,
        tOpen: false,
        students: [
            {name: 'Berik',
            statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
            },
            {name: 'Serik',
            statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
             },
             {name: 'Aman',
             statusq1: false,
             statusq2: false,
             statusq3: false,
             statusq4: false,
             statusT: false,
             linePens: false,
             q1: '',
             q2: '',
             q3: '',
             q4: '',
             arrOfQ: [[], [], [], []],
             q1Open: false,
             q2Open: false,
             q3Open: false,
             q4Open: false,
             tOpen: false
             },
            {name: 'Ulan',
            statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
             },
             {name: 'Bekzat',
             statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
             },
             {name: 'Nake',
            statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
            },
            {name: 'Dake',
            statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
             },
             {name: 'Jake',
             statusq1: false,
             statusq2: false,
             statusq3: false,
             statusq4: false,
             statusT: false,
             linePens: false,
             q1: '',
             q2: '',
             q3: '',
             q4: '',
             arrOfQ: [[], [], [], []],
             q1Open: false,
             q2Open: false,
             q3Open: false,
             q4Open: false,
             tOpen: false
             },
            {name: 'Sake',
            statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
             },
             {name: 'Make',
             statusq1: false,
            statusq2: false,
            statusq3: false,
            statusq4: false,
            statusT: false,
            linePens: false,
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            arrOfQ: [[], [], [], []],
            q1Open: false,
            q2Open: false,
            q3Open: false,
            q4Open: false,
            tOpen: false
             },
        ]
    }),
    methods: {
        savePointsHandler(idx) {
            
                if(this.students[idx].arrOfQ[0].length < 2) {
                    if(typeof(this.students[idx].q1) === 'number')
                    this.students[idx].arrOfQ[0].push(this.students[idx].q1)
                }
                else if(this.students[idx].arrOfQ[0].length === 2) {
                    this.students[idx].arrOfQ[0].shift()
                    if(typeof(this.students[idx].q1) === 'number')
                    this.students[idx].arrOfQ[0].push(this.students[idx].q1)
                }
            
           
                if(this.students[idx].arrOfQ[1].length < 2) {
                    if(typeof(this.students[idx].q2) === 'number')
                    this.students[idx].arrOfQ[1].push(this.students[idx].q2)
                }
                else if(this.students[idx].arrOfQ[1].length === 2) {
                    this.students[idx].arrOfQ[1].shift()
                    if(typeof(this.students[idx].q2) === 'number')
                    this.students[idx].arrOfQ[1].push(this.students[idx].q2)
                }
            
            
                if(this.students[idx].arrOfQ[2].length < 2) {
                    if(typeof(this.students[idx].q3) === 'number')
                    this.students[idx].arrOfQ[2].push(this.students[idx].q3)
                }
                else if(this.students[idx].arrOfQ[2].length === 2) {
                    this.students[idx].arrOfQ[2].shift()
                    if(typeof(this.students[idx].q3) === 'number')
                    this.students[idx].arrOfQ[2].push(this.students[idx].q3)
                }
            
                if(this.students[idx].arrOfQ[3].length < 2) {
                    if(typeof(this.students[idx].q4) === 'number')
                    this.students[idx].arrOfQ[3].push(this.students[idx].q4)
                }
                else if(this.students[idx].arrOfQ[3].length === 2) {
                    this.students[idx].arrOfQ[3].shift()
                    if(typeof(this.students[idx].q4) === 'number')
                    this.students[idx].arrOfQ[3].push(this.students[idx].q4)
                }            

            this.saveBtn = false
            this.students[idx].statusq1 = false
            this.students[idx].statusq2 = false
            this.students[idx].statusq3 = false
            this.students[idx].statusq4 = false

            this.linePens = !this.linePens

            let listItemT = document.querySelector(".t-" + idx);
            this.students[idx].tOpen = false
            listItemT.innerHTML = `
            ${this.students[idx].q1 !== '' ? Math.floor(
                (this.students[idx].q1 * this.w1 / 100)
              + (this.students[idx].q2 * this.w2 / 100)
              + (this.students[idx].q3 * this.w3 / 100)
              + (this.students[idx].q4 * this.w4 / 100)) : ''
            }`
            
        },

        openQ1Inputs(idx) {
            this.students[idx].statusq1 = true
            this.students[idx].q1Open = false
        },
        openQ2Inputs(idx) {
            this.students[idx].statusq2 = true
            this.students[idx].q2Open = false
        },
        saveQ2PointsHandler(idx) {
            this.saveBtn = false
            // this.students[idx].q2Open = true
            this.linePens = !this.linePens

        },
        openQ3Inputs(idx) {
            this.students[idx].statusq3 = true
            this.students[idx].q3Open = false
        },
        saveQ3PointsHandler(idx) {
            this.saveBtn = false
            this.students[idx].q3Open = true
        },

        openQ4Inputs(idx) {
            this.students[idx].statusq4 = true
            this.students[idx].q4Open = false
        },
        saveQ4PointsHandler(idx) {
            this.saveBtn = false
            this.students[idx].q4Open = true
        },

        

        openLine(idx) {
            this.students[idx].linePens = !this.students[idx].linePens

            this.students[idx].q1Open = !this.students[idx].q1Open
            this.students[idx].q2Open = !this.students[idx].q2Open
            this.students[idx].q3Open = !this.students[idx].q3Open
            this.students[idx].q4Open = !this.students[idx].q4Open
            this.students[idx].tOpen = !this.students[idx].tOpen

            this.students[idx].statusq1 = !this.students[idx].statusq1
            this.students[idx].statusq2 = !this.students[idx].statusq2
            this.students[idx].statusq3 = !this.students[idx].statusq3
            this.students[idx].statusq4 = !this.students[idx].statusq4
            this.students[idx].statusT = !this.students[idx].statusT
            
        },

        showHandler() {
            let sortedStudents = this.students
            let selectEl = document.querySelector('#sorting')

            if(selectEl.selectedIndex === 1) {
                sortedStudents = sortedStudents.sort((a,b) => {
                    if(a.arrOfQ[0].length !== 1) {
                        return a.arrOfQ[0][1] - b.arrOfQ[0][1]
                    }
                    return a.arrOfQ[0][0] - b.arrOfQ[0][0]
                })
            }
            else if(selectEl.selectedIndex === 2) {
                sortedStudents = sortedStudents.sort( (a,b) => {
                    if(a.arrOfQ[1].length !== 1) {
                        return a.arrOfQ[1][1] - b.arrOfQ[1][1]
                    }
                    return a.arrOfQ[1][0] - b.arrOfQ[1][0]
                })
            }
            else if(selectEl.selectedIndex === 3) {
                sortedStudents = sortedStudents.sort( (a,b) => {
                    if(a.arrOfQ[2].length !== 1) {
                        return a.arrOfQ[2][1] - b.arrOfQ[2][1]
                    }
                    return a.arrOfQ[2][0] - b.arrOfQ[2][0]
                })
            }
            else if(selectEl.selectedIndex === 4) {
                sortedStudents = sortedStudents.sort( (a,b) => {
                    if(a.arrOfQ[3].length !== 1) {
                        return a.arrOfQ[3][1] - b.arrOfQ[3][1]
                    }
                    return a.arrOfQ[3][0] - b.arrOfQ[3][0]
                })
            }
            
        },
        showHandler2() {
            let sortedStudents = this.students
            let selectEl = document.querySelector('#sorting2')

            if(selectEl.selectedIndex === 1) {
                sortedStudents = sortedStudents.sort((a,b) => {
                    if(a.arrOfQ[0].length !== 1) {
                        return b.arrOfQ[0][1] - a.arrOfQ[0][1]
                    }
                    return b.arrOfQ[0][0] - a.arrOfQ[0][0]
                })
            }
            else if(selectEl.selectedIndex === 2) {
                sortedStudents = sortedStudents.sort( (a,b) => {
                    if(a.arrOfQ[1].length !== 1) {
                        return b.arrOfQ[1][1] - a.arrOfQ[1][1]
                    }
                    return b.arrOfQ[1][0] - a.arrOfQ[1][0]
                })
            }
            else if(selectEl.selectedIndex === 3) {
                sortedStudents = sortedStudents.sort( (a,b) => {
                    if(a.arrOfQ[2].length !== 1) {
                        return b.arrOfQ[2][1] - a.arrOfQ[2][1]
                    }
                    return b.arrOfQ[2][0] - a.arrOfQ[2][0]
                })
            }
            else if(selectEl.selectedIndex === 4) {
                sortedStudents = sortedStudents.sort( (a,b) => {
                    if(a.arrOfQ[3].length !== 1) {
                        return b.arrOfQ[3][1] - a.arrOfQ[3][1]
                    }
                    return b.arrOfQ[3][0] - a.arrOfQ[3][0]
                })
            }
        }
    }
}).mount('#app')
console.log('test !!!!!!!!!!!')