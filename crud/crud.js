// html 요소 가져오기
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const count = document.querySelector("#count");
// 할일 데이터를 저장하는 배열 
let tasks = [
    {
        id:1, 
        text: "HTML 공부하기", 
        done: false,
    },
    {
        id:2, 
        text: "CSS 공부하기", 
        done: false,
    },
];
// 다음에 사용할 id 번호
let nextId = 3; 
// R - 목록 출력 (read)
function renderTasks() {
    // console.log("read");
    // 기존 화면 비우기 (초기화)
    taskList.innerHTML = "";
    // 배열의 데이터를 하나씩 화면에 출력 ]
    tasks.forEach((task) => { 
        // console.log(task);
        const liE = document.createElement("li");
        // console.log(li);
        // 할 일 내용 
        const spanE = document.createElement("span");
        spanE.className = "task_text";
        spanE.textContent = task.text;
        // console.log(span);
        // 완료 여부에 따라서 클래스 추가 
        if(task.done){
            spanE.classList.add("done");
        };
        // 완료 체크 버튼 
        const checkBtn = document.createElement("button");
        console.log(checkBtn);
        // 삼향연산자 
        checkBtn.textContent = task.done ? "완료 취소" : "완료" ; 
        // 완료 체크 버튼 클릭시 함수
        checkBtn.addEventListener("click" , function() { 
            task.done = !task.done;
            // console.log(task.done);
            renderTasks();
        });
        // 수정 버튼 
        const editBtn = document.createElement("button");
        editBtn.textContent = "수정";
        editBtn.className = "edit_btn";
        // console.log(editBtn);
        // 수정 버튼 클릭시 함수
        editBtn.addEventListener("click" , function() { 
            const nextText = prompt("수정할 내용을 입력하세요." , task.text ) ; 
            console.log(nextText);
            // task.text = nextText ; 
            if (nextText !== null && nextText.trim() !== "") { 
                task.text = nextText ; 
            }
            renderTasks();
        });
        // 삭제 버튼 
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.className = "delete_btn";
        console.log(deleteBtn);
        // 삭제 버튼 클릭 시 함수 
        deleteBtn.addEventListener("click" , function() { 
            const ok = confirm("정말 삭제할까요?");
            console.log(ok);
            if(ok){
                tasks = tasks.filter((item)=>{ 
                    // console.log(item);
                    // 현재 삭제하려는 할 일을 제외하고 나머지만 남기기
                    // return : 결과를 돌려준다 
                    return item.id !== task.id ; 
                });
                renderTasks();
            }
        }); 
        // 버튼 담을 영역 
        const actions = document.createElement("div");
        console.log(actions);
        actions.className = "actions";
        actions.append(checkBtn, editBtn, deleteBtn);
        
        // 목록에 내용과 버튼 넣기
        liE.append(spanE, actions);
        console.log(liE);
        taskList.append(liE);
    });
    // 전체 개수와 완료 개수
    const doneCount = tasks.filter((task)=>{
        // console.log(task);
        return task.done;
    }).length;
    console.log(doneCount);
    count.textContent = `완료 ${doneCount}개 / 전체 ${tasks.length}개`
}
// C - 새 할일 추가 (Create)
taskForm.addEventListener("submit" , function(e) { 
    // form 제출 시 페이지가 새로 고침되는 기능을 방지하는 코드
    e.preventDefault();
    const text =taskInput.value.trim();
    // console.log(text);
    // 빈 내용은 등록 하지 않음 
    if (text === "") { 
        alert("할 일을 입력하세요.");
        return; // 종료하는 기능 (이후 코드를 생략하고 처음으로 돌아가기)
    }
    // 배열에 새 객체 추가 
    tasks.push({
        id: nextId, 
        text: text, 
        done: false,
    });
    console.log(tasks);
    // 번호 넘어가기 
    nextId++
    // 입력창 지우기 
    taskInput.value = "";
    // 변경할 내용을 출력하기 
    renderTasks(); 
    // 화면 출력 함수 재사용 
});

// 처음 화면 출력 
renderTasks();