const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(myObj) {
        const {age} = myObj
        const {languages} = myObj.skills
        let str = `Мне ${age} и я владею языками: ${languages}`

        return str.toUpperCase()
    }
}

function showExperience(myObj) {
    const { exp } = myObj.skills
    console.log(exp)

    return exp
}

function showProgrammingLangs(myObj) {
    let str = ''
    const { programmingLangs } = myObj.skills
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
        console.log(str)
    }

    return str
}

// showExperience(personalPlanPeter)
// showProgrammingLangs(personalPlanPeter)
personalPlanPeter.showAgeAndLangs(personalPlanPeter)