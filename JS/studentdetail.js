var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
if (!localStorage.getItem("isLoggedIn")) {
    window.location.replace("/HTML/login.html");
}
document.addEventListener('DOMContentLoaded', function () { return __awaiter(_this, void 0, void 0, function () {
    var studentTableBody, handleEditStudent, handleDeleteStudent, renderStudents, fetchStudents;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                studentTableBody = document.querySelector('#studentTable tbody');
                handleEditStudent = function (studentId) {
                    window.location.href = "adddetails.html?studentId=".concat(studentId);
                };
                handleDeleteStudent = function (studentId) { return __awaiter(_this, void 0, void 0, function () {
                    var response, errorText, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!confirm('Are you sure you want to delete this student?')) return [3 /*break*/, 8];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 7, , 8]);
                                return [4 /*yield*/, fetch("https://student-management-1-xok5.onrender.com/api/deleteStudent/".concat(studentId), {
                                        method: 'DELETE'
                                    })];
                            case 2:
                                response = _a.sent();
                                if (!response.ok) return [3 /*break*/, 4];
                                alert('Student deleted successfully');
                                return [4 /*yield*/, fetchStudents()];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 6];
                            case 4: return [4 /*yield*/, response.text()];
                            case 5:
                                errorText = _a.sent();
                                alert('Failed to delete student:\n' + errorText);
                                _a.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_1 = _a.sent();
                                console.error('Delete Error:', error_1);
                                alert('Error deleting student');
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); };
                renderStudents = function (students) {
                    studentTableBody.innerHTML = '';
                    students.forEach(function (student, index) {
                        var _a, _b;
                        var row = document.createElement('tr');
                        row.innerHTML = "\n          <td>".concat(index + 1, "</td>\n          <td>").concat(student.studentid, "</td>\n          <td>").concat(student.name, "</td>\n          <td>").concat(student.class, "</td>\n          <td>").concat(student.email, "</td>\n          <td>\n            <button class=\"edit-btn\" data-id=\"").concat(student.studentid, "\">Edit</button>\n            <button class=\"delete-btn\" data-id=\"").concat(student.studentid, "\">Delete</button>\n          </td>\n        ");
                        studentTableBody.appendChild(row);
                        (_a = row.querySelector('.edit-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                            handleEditStudent(student.studentid);
                        });
                        (_b = row.querySelector('.delete-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
                            handleDeleteStudent(student.studentid);
                        });
                    });
                };
                fetchStudents = function () { return __awaiter(_this, void 0, void 0, function () {
                    var response, students, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 5, , 6]);
                                return [4 /*yield*/, fetch('https://student-management-1-xok5.onrender.com/api/getStudents')];
                            case 1:
                                response = _a.sent();
                                if (!response.ok) return [3 /*break*/, 3];
                                return [4 /*yield*/, response.json()];
                            case 2:
                                students = _a.sent();
                                renderStudents(students);
                                return [3 /*break*/, 4];
                            case 3: throw new Error('Failed to fetch students');
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                error_2 = _a.sent();
                                console.error('Fetch Error:', error_2);
                                alert('Error loading student data');
                                return [3 /*break*/, 6];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, fetchStudents()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
