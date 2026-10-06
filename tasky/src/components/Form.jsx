import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const AddTaskForm = (props) => {

    return (
        <Box
            component="form"
            sx={{
                '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
            }}
            onSubmit={props.submit}
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    name="title"
                    label="Task Title"
                    slotProps={{ inputLabel: { shrink: true } }}
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <TextField
                    required
                    name="deadline"
                    label="Deadline"
                    slotProps={{ inputLabel: { shrink: true } }}
                    type="date"
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <TextField
                    name="description"
                    id="outlined-multiline-static"
                    label="Task Details"
                    slotProps={{ inputLabel: { shrink: true } }}
                    multiline
                    rows={4}
                    onChange={(event) => props.change(event)}
                />
            </div>

            <div>
                <Typography component="legend" sx={{ m: 1 }}>
                    Priority
                </Typography>
                <Rating
                    name="rating"
                    defaultValue={0}
                    sx={{ m: 1 }}
                    onChange={(event, newValue) =>
                        props.change({ target: { name: 'rating', value: newValue } })
                    }
                />
            </div>

            <div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        m: 1,
                        p: 1,
                        width: '95%'
                    }}
                >
                    Add Task
                </Button>
            </div>
        </Box>
    )
};

export default AddTaskForm;