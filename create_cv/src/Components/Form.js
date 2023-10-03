import { Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import "./css/Form.css";
import Pdf from 'react-to-pdf';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';

export const Form = () => {
    const initialState = {
        jobTitle: '',
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Summary: '',
        Language: [],
        skills: [],
        hobbies: [],
        project: [],
        experiences: [],
        education: [],
    }
    const ref = React.createRef();
    const [data, setData] = useState(initialState);
    const [file, setFile] = useState();
    const [language, setLanguage] = useState('');
    const [skills, setskills] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [project, setProject] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [workName, setWorkName] = useState('');
    const [college, setCollege] = useState('');
    const [year, setYear] = useState('');
    const [percentage, setPercentage] = useState('');

    const handleRemoveLanguage = (index) => {
        const newPeople = data.Language.filter((items, i) => i !== index);
        setData({ ...data, Language: newPeople });
    };
    const handleRemoveSkills = (index) => {
        const newPeople = data.skills.filter((items, i) => i !== index);
        setData({ ...data, skills: newPeople });
    };
    const handleRemoveProject = (index) => {
        const newPeople = data.project.filter((items, i) => i !== index);
        setData({ ...data, project: newPeople });
    };
    const handleRemoveHobbies = (index) => {
        const newPeople = data.hobbies.filter((items, i) => i !== index);
        setData({ ...data, hobbies: newPeople });
    };
    const handleRemoveExperiences = (index) => {
        const newPeople = data.experiences.filter((items, i) => i !== index);
        setData({ ...data, experiences: newPeople });
    };
    const handleRemoveEducation = (index) => {
        const newPeople = data.education.filter((items, i) => i !== index);
        setData({ ...data, education: newPeople });
    };
    // console.log('DATA', data);
    const [isUpdateLanguage, setIsUpdateLanguage] = useState(false);
    const [isUpdateskills, setIsUpdateskills] = useState(false);
    const [isUpdatehobbies, setIsUpdatehobbies] = useState(false);
    const [isUpdateProject, setIsUpdateProject] = useState(false);
    const [isUpdateexperiences, setIsUpdateexperiences] = useState(false);
    const [isUpdateeducation, setIsUpdateeducation] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);
    const handleLanguageUpdate = (index, item) => {
        let newEditItem = data.Language.find((items) => {
            return items === item
        })
        setIsUpdateLanguage(true);
        setLanguage(newEditItem);
        setUpdateIndex(index);
    }
    const handleSkillUpdate = (index, item) => {
        let newEditItem = data.skills.find((items) => {
            return items === item
        })
        setIsUpdateskills(true);
        setskills(newEditItem);
        setUpdateIndex(index);
    }
    const handlehobbiesUpdate = (index, item) => {
        let newEditItem = data.hobbies.find((items) => {
            return items === item
        })
        setIsUpdatehobbies(true);
        setHobbies(newEditItem);
        setUpdateIndex(index);
    }
    const handleprojectUpdate = (index, item) => {
        let newEditItem = data.project.find((items) => {
            return items === item
        })
        setIsUpdateProject(true);
        setProject(newEditItem);
        setUpdateIndex(index);
    }
    const handleexperiencesUpdate = (index, item) => {
        let newEditItem = data.experiences.find((items) => {
            return items.company === item.company
        })
        let newEditItemS = data.experiences.find((items) => {
            return items.startDate === item.startDate
        })
        let newEditItemL = data.experiences.find((items) => {
            return items.endDate === item.endDate
        })
        let newEditItemW = data.experiences.find((items) => {
            return items.workName === item.workName
        })
        setIsUpdateexperiences(true);
        setCompany(newEditItem.company);
        setStartDate(newEditItemS.startDate);
        setEndDate(newEditItemL.endDate);
        setWorkName(newEditItemW.workName);
        setUpdateIndex(index);

    }
    const handleeducationUpdate = (index, item) => {
        let newEditItem = data.education.find((items) => {
            return items.college === item.college
        })
        let newEditItemS = data.education.find((items) => {
            return items.year === item.year
        })
        let newEditItemL = data.education.find((items) => {
            return items.percentage === item.percentage
        })
        setIsUpdateeducation(true);
        setCollege(newEditItem.college);
        setYear(newEditItemL.year);
        setPercentage(newEditItemS.percentage);
        setUpdateIndex(index);
    }
    const handleLanguageUpdateClick = () => {
        const newData = data.Language.map((itm, index) => {
            if (index === updateIndex) {
                return language
            }
            return itm;
        })
        setData({ ...data, Language: newData });
        setIsUpdateLanguage(false);
        setLanguage('');
        setUpdateIndex(null);
    }
    const handleSkillUpdateClick = () => {
        const newData = data.skills.map((itm, index) => {
            if (index === updateIndex) {
                return skills
            }
            return itm;
        })
        setData({ ...data, skills: newData });
        setIsUpdateskills(false);
        setskills('');
        setUpdateIndex(null);
    }
    const handlehobbiesUpdateClick = () => {
        const newData = data.hobbies.map((itm, index) => {
            if (index === updateIndex) {
                return hobbies
            }
            return itm;
        })
        setData({ ...data, hobbies: newData });
        setIsUpdatehobbies(false);
        setHobbies('');
        setUpdateIndex(null);
    }
    const handleExperiencesUpdateClick = () => {
        const exp = {
            company,
            startDate,
            endDate,
            workName,
        }
        const newData = data.experiences.map((itm, index) => {
            if (index === updateIndex) {
                return exp
            }
            return itm;
        })
        setData({ ...data, experiences: newData });
        setIsUpdateProject(false);
        setCompany('');
        setStartDate('');
        setEndDate('');
        setWorkName('');
        setUpdateIndex(null);
    }
    const handleEducationUpdateClick = () => {
        const education = {
            college,
            year,
            percentage,
        }
        const newData = data.education.map((itm, index) => {
            if (index === updateIndex) {
                return education
            }
            return itm;
        })
        setData({ ...data, education: newData });
        setIsUpdateProject(false);
        setCollege('');
        setYear('');
        setPercentage('');
        setUpdateIndex(null);
    }
    const handleprojectUpdateClick = () => {
        const newData = data.project.map((itm, index) => {
            if (index === updateIndex) {
                return project
            }
            return itm;
        })
        setData({ ...data, project: newData });
        setIsUpdateProject(false);
        setProject('');
        setUpdateIndex(null);
    }
    // const updateFieldChanged = (index, e) => {
    //     // const updateData = { ...data[index], name: e.target.value.trim() }
    //     // setData([...data.slice(0, index), updateData, ...data.slice(index + 1)])
    //     const myNextList = [...data];
    //     const artwork = myNextList.find(a => a.id === index);
    //     // artwork.seen = nextSeen; 
    //     // setMyList(myNextList);
    // }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.trim()
        });
    };
    const handleLanguage = () => {
        setData({
            ...data,
            Language: [...data.Language, language]
        });
        setLanguage('');
    };
    const handleSkills = () => {
        setData({
            ...data,
            skills: [...data.skills, skills]
        });
        setskills('');
    };
    const handleHobbies = () => {
        setData({
            ...data,
            hobbies: [...data.hobbies, hobbies]
        });
        setHobbies('');
    };
    const handleProject = () => {
        setData({
            ...data,
            project: [...data.project, project]
        });
        setProject('');
    };
    const handleAdd = () => {
        const experiences = {
            company,
            startDate,
            endDate,
            workName
        }
        setData({
            ...data,
            experiences: [...data.experiences, experiences]
        });
        setCompany('');
        setStartDate('');
        setEndDate('');
        setWorkName('');

    };
    const handleEducationAdd = () => {
        const education = {
            college,
            year,
            percentage,
        }
        setData({
            ...data,
            education: [...data.education, education]
        });
        setCollege('');
        setYear('');
        setPercentage('');
    };
    const handleImage = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div style={{
            backgroundColor: 'white',
            width: "100%",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <div style={{ backgroundColor: 'white', width: "50%", paddingLeft: 100, paddingRight: 100 }}>
                <h1 style={{ textAlign: 'center', marginTop: 30 }}>Resume</h1>
                <h3 style={{ marginTop: 20, marginBottom: 20 }}>Personal Details</h3>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                    <div style={{ width: "50%" }}>
                        <h5>Job Title</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter jobTitle'
                            name="jobTitle"
                            type="text"
                            onChange={handleChange}
                            value={data.jobTitle}
                        />
                    </div>
                    <div style={{ marginLeft: 20, width: "50%" }}>
                        <h5>Picture</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Select Image'
                            type="file"
                            onChange={handleImage}
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                    <div style={{ width: "50%" }}>
                        <h5>First Name</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter First Name'
                            name="FirstName"
                            type="text"
                            onChange={handleChange}
                            value={data.FirstName}
                        />
                    </div>
                    <div style={{ marginLeft: 20, width: "50%" }}>
                        <h5>Last Name</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter Last Name'
                            name="LastName"
                            type="text"
                            onChange={handleChange}
                            value={data.LastName}
                        />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                    <div style={{ width: "50%" }}>
                        <h5>Email</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter Email'
                            name="Email"
                            type="email"
                            onChange={handleChange}
                            value={data.Email}
                        />
                    </div>
                    <div style={{ marginLeft: 20, width: "50%" }}>
                        <h5>Phone</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter Phone'
                            max="10"
                            name="Phone"
                            type="tel"
                            onChange={handleChange}
                            value={data.Phone}
                            pattern="[+]{1}[0-9]{11,14}"
                            required
                        />
                    </div>
                </div>
                <div>
                    <h5>Summary</h5>
                    <Textarea
                        name='Summary'
                        style={{ width: "100%", marginBottom: 10, height: '100px', fontSize: 15, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                        placeholder='Enter Summary'
                        onChange={handleChange}
                        value={data.Summary}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                    <div style={{ width: "50%" }}>
                        <h2>Language</h2>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter Language'
                            name="language"
                            type='text'
                            onChange={(e) => setLanguage(e.target.value.trim())}
                            value={language}
                        />
                        {!isUpdateLanguage ?
                            <button style={{ width: 60, height: 30 }} onClick={handleLanguage}>Add</button>
                            :
                            <button style={{ width: 60, height: 30 }} onClick={handleLanguageUpdateClick}>Update</button>
                        }
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.Language.map((item, index) => <li >{item}
                                <MdDeleteForever style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleRemoveLanguage(index)} />
                                <AiOutlineEdit style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleLanguageUpdate(index, item)} />
                            </li>)}
                        </div>
                    </div>
                    <div style={{ marginLeft: 20, width: "50%" }}>
                        <h2>Skills</h2>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter Skills'
                            name="skills"
                            type='text'
                            onChange={(e) => setskills(e.target.value.trim())}
                            value={skills}
                        />
                        {!isUpdateskills ?
                            <button style={{ width: 60, height: 30 }} onClick={handleSkills}>Add</button>
                            :
                            <button style={{ width: 60, height: 30 }} onClick={handleSkillUpdateClick}>Update</button>
                        }
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.skills.map((item, index) => <li>{item}
                                <MdDeleteForever style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleRemoveSkills(index)} />
                                <AiOutlineEdit style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleSkillUpdate(index, item)} />

                            </li>)}
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                    <div style={{ width: "50%" }}>
                        <h2>Hobbies</h2>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter Hobbies'
                            name="hobbies"
                            type='text'
                            onChange={(e) => setHobbies(e.target.value.trim())}
                            value={hobbies}
                        />
                        {!isUpdatehobbies ?
                            <button style={{ width: 60, height: 30 }} onClick={handleHobbies}>Add</button>
                            :
                            <button style={{ width: 60, height: 30 }} onClick={handlehobbiesUpdateClick}>Update</button>
                        }
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.hobbies.map((item, index) => <li>{item}
                                <MdDeleteForever style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleRemoveHobbies(index)} />
                                <AiOutlineEdit style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handlehobbiesUpdate(index, item)} />

                            </li>)}
                        </div>
                    </div>
                    <div style={{ marginLeft: 20, width: "50%" }}>
                        <h2>Project</h2>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter project'
                            name="project"
                            type='text'
                            onChange={(e) => setProject(e.target.value.trim())}
                            value={project}
                        />
                        {!isUpdateProject ?
                            <button style={{ width: 60, height: 30 }} onClick={handleProject}>Add</button>
                            :
                            <button style={{ width: 60, height: 30 }} onClick={handleprojectUpdateClick}>Update</button>
                        }
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.project.map((item, index) => <li>{item}
                                <MdDeleteForever style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleRemoveProject(index)} />
                                <AiOutlineEdit style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleprojectUpdate(index, item)} />
                            </li>)}
                        </div>
                    </div>
                </div>
                <h2 style={{ marginTop: 20, marginBottom: 20 }}>Experience</h2>
                <div>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <div style={{ width: "50%" }} >
                            <h5>Company Name</h5>
                            <Input
                                style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                                placeholder='Enter company name'
                                name="company"
                                type='text'
                                onChange={(e) => setCompany(e.target.value.trim())}
                                value={company}
                            />
                        </div>
                        <div style={{ marginLeft: 20, width: "50%" }}>
                            <h5>Start date</h5>
                            <Input
                                style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                                placeholder='Enter Start date '
                                name="startDate"
                                type='date'
                                onChange={(e) => setStartDate(e.target.value.trim())}
                                value={startDate}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <div style={{ width: "50%" }}>
                            <h5>End Date</h5>
                            <Input
                                style={{ width: "100%", height: "5vh", fontSize: 20, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                                placeholder='Enter End date '
                                name="endDate"
                                type='date'
                                onChange={(e) => setEndDate(e.target.value.trim())}
                                value={endDate}
                            />
                        </div>
                        <div style={{ marginLeft: 20, width: "50%" }}>
                            <h5>Work</h5>
                            <Input
                                style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                                placeholder='Enter work'
                                name="workName"
                                type='text'
                                onChange={(e) => setWorkName(e.target.value.trim())}
                                value={workName} />
                        </div>
                    </div>
                    {!isUpdateexperiences ?
                        <button onClick={handleAdd} style={{ width: 60, height: 30 }} >Add</button>
                        :
                        <button style={{ width: 60, height: 30 }} onClick={handleExperiencesUpdateClick}>Update</button>
                    }
                    <div>
                        {data.experiences.map((item, index) => {
                            return (
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <h5>{item.company}</h5>
                                        <p>{item.startDate} {item.endDate}</p>
                                        <p>{item.workName}</p>
                                    </div>
                                    <div>
                                        <MdDeleteForever style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleRemoveExperiences(index)} />
                                        <AiOutlineEdit style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleexperiencesUpdate(index, item)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h2 style={{ marginTop: 20, marginBottom: 20 }}>Education</h2>
                <div>
                    <div >
                        <h5>College/University Name</h5>
                        <Input
                            style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                            placeholder='Enter College/University name'
                            name="college"
                            type='text'
                            onChange={(e) => setCollege(e.target.value.trim())}
                            value={college}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <div style={{ width: "50%" }}>
                            <h5>Passing Year</h5>
                            <Input
                                style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                                placeholder='Enter Passing year '
                                name="year"
                                type='date'
                                onChange={(e) => setYear(e.target.value.trim())}
                                value={year}
                            />
                        </div>
                        <div style={{ marginLeft: 20, width: "50%" }}>
                            <h5>Percentage</h5>
                            <Input
                                style={{ width: "100%", height: "5vh", fontSize: 15, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                                placeholder='Enter percentage'
                                name="percentage"
                                type='text'
                                onChange={(e) => setPercentage(e.target.value.trim())}
                                value={percentage}
                            />
                        </div>
                    </div>
                    {!isUpdateeducation ?
                        <button onClick={handleEducationAdd} style={{ width: 60, height: 30 }} >Add</button>
                        :
                        <button style={{ width: 60, height: 30 }} onClick={handleEducationUpdateClick}>Update</button>
                    }
                    <div >
                        {data.education.map((item, index) => {
                            return (
                                <tr>
                                    <td >{item.college}</td>
                                    <td style={{ paddingLeft: 15 }}>{item.year}</td>
                                    <td style={{ paddingLeft: 15 }}>{item.percentage}</td>
                                    <MdDeleteForever style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleRemoveEducation(index)} />
                                    <AiOutlineEdit style={{ paddingLeft: 10, fontSize: 30 }} onClick={() => handleeducationUpdate(index, item)} />

                                </tr>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div class="split right" style={{ display: 'flex', flexDirection: 'column' }} >
                <div>
                    <Pdf targetRef={ref} filename="resume.pdf" >
                        {({ toPdf }) => <button onClick={toPdf} style={{ marginLeft: 100 }} class="button button1">Download</button>}
                    </Pdf>
                </div>
                <div className='full' style={{ display: 'grid', width: "80%", backgroundColor: 'white', marginLeft: 100, marginRight: 100, marginBottom: 20, borderRadius: 10 }} ref={ref} >
                    <div class="left">
                        <div class="image">
                            <img src={file}
                                alt="gfg-logo"
                                style={{ width: "100px", height: "100px", borderRadius: 100 }} />
                        </div>
                        <div class="Contact">
                            <h2>Contact</h2>
                            <p><b>Email id:</b>{data.Email}</p>
                            <p><b>Mobile no :</b>{data.Phone}</p>
                        </div>
                        <div class="Skills">
                            <h2>Skills</h2>
                            <ul style={{ display: "flex", flexDirection: 'column' }}>
                                {data.skills.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                        <div class="Language">
                            <h2>Language</h2>
                            <ul style={{ display: "flex", flexDirection: 'column' }}>
                                {data.Language.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                        <div class="Hobbies">
                            <h2>Hobbies</h2>
                            <ul style={{ display: "flex", flexDirection: 'column' }}>
                                {data.hobbies.map(item => <li>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div class="rightGrid">
                        <div class="name">
                            <h1>{data.FirstName} {data.LastName}</h1>
                        </div>
                        <div class="title">
                            <p>{data.jobTitle}</p>
                        </div>
                        <div class="Summary">
                            <h2>Summary</h2>
                            <p>{data.Summary}
                            </p>
                        </div>
                        <div class="Experience">
                            <h2>Experience</h2>
                            {data.experiences.map(item => {
                                return (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <h5>{item.company}</h5>
                                        <p>{item.startDate} {item.endDate}</p>
                                        <ul>
                                            <li>{item.workName}</li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="Education">
                            <h2>Education</h2>
                            <table>
                                <tr>
                                    <th>University/college  </th>
                                    <th>Passing/year </th>
                                    <th>percentage/cgpa</th>
                                </tr>
                                {data.education.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.college}</td>
                                            <td>{item.year}</td>
                                            <td>{item.percentage}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                        <div class="project">
                            <h2>Project</h2>
                            <ul style={{ display: "flex", flexDirection: 'column' }}>
                                {data.project.map(item => <li><p>{item}</p></li>)}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
