package com.kaiburr.rabin.Controller;

import com.kaiburr.rabin.model.Task;
import com.kaiburr.rabin.Service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:9091")
@RestController
@RequestMapping("/")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping("/")
    public List<Task> getAllTasks() {
        return service.getAllTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTask(@PathVariable String id) {
        Task task = service.getTaskById(id);
        return task != null ? ResponseEntity.ok(task) : ResponseEntity.notFound().build();
    }

    @GetMapping("/search/{id}")
    public Task findByName(@PathVariable String id) {
        // List<Task> results = service.findByName(name);
        Task task = service.getTaskById(id);
        return task;
    }

    @PostMapping("/entethetask")

    public ResponseEntity<Task> putTask(@RequestBody Task task) {
        return ResponseEntity.ok(service.saveTask(task));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTask(@PathVariable String id) {
        service.deleteTaskById(id);
    }
    @PutMapping("/{id}/execute")
    public ResponseEntity<Task> execute(@PathVariable String id, @RequestBody Task task) throws IOException {
        return ResponseEntity.ok(service.executeTask(id, task));
    }

}
