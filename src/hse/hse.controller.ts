import { Body, Controller, Post , Get, Param } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse , ApiParam  } from '@nestjs/swagger'; // For Swagger documentation
import { CreateHseDto } from './dto/create_hse.dto'; // Ensure the path is correct
import { HseService } from './hse.service'; // Ensure the path is correct

@Controller('hse')
export class HseController {
  constructor(private readonly hseService: HseService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new HSE instruction' })
  @ApiBody({ type: CreateHseDto })
  @ApiResponse({ status: 201, description: 'HSE instruction created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createHseDto: CreateHseDto) {
    // Assuming the employee_id comes from the authenticated user (this should be handled via middleware or guards)
    const employee_id = 1; // For example, this can come from the authenticated user context

    // Call the service to create the instruction
    return this.hseService.create(createHseDto, employee_id);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get an HSE instruction by ID' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'The ID of the HSE instruction',
  })
  @ApiResponse({ status: 200, description: 'HSE instruction retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'HSE instruction not found.' })
  async findById(@Param('id') id: number) {
    try {

      return await this.hseService.findById(Number(id));
    } catch (error) {
      throw new Error(error.message);
    }
  }
}


