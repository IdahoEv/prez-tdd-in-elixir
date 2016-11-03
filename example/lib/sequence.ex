defmodule Sequence do
  use GenServer

  # ------- API
  def start(initial_value) do
    GenServer.start_link(__MODULE__,
      initial_value
    )
  end

  def next(pid) do
    GenServer.call(pid, :get_next_value )
  end

  # ------- Callback / Implementation
  def init(initial_state) do
    { :ok, initial_state }
  end

  def handle_call( :get_next_value,
                    _from,
                    state ) do
    { :reply, state, state + 1}
  end
end
