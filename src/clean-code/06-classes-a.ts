(() => {
    //No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';
    class Person {
        //Forma larga de crear clases en typescript
        // public name: string;
        // public gender: Gender;
        // public birthdate: Date;
        
        // constructor(name: string, gender: Gender, birthdate: Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        //Forma corta de crear clases en typescript
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}
    }

    const newPerson = new Person('Diego', 'M', new Date('11-09-1993'));
    console.log({ newPerson });

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }


        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSetting = new UserSettings(
        '/usr/home',
        '/home',
        'diego@google.com',
        'admin',
        'diego',
        'M',
        new Date('1993-09-11')
    )

    console.log(userSetting);
})();