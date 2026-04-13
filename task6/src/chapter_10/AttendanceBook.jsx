import React from 'react';

const students = [
    { id: 1, name: "김민서"},
    { id: 2, name: "유재석"},
    { id: 3, name: "박명수"},
    { id: 4, name: "정준하"},
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;